use anchor_lang::prelude::*;

declare_id!("HTrG3pJZTbRCSmcpBFxCDYDPeVbhNL3nNkfVYTAR1ifz");

#[program]
pub mod myepicproject {
    use super::*;
    pub fn start_stuff_off(ctx: Context<StartStuffOff>) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        base_account.total_gifs = 0;
        base_account.gif_list = Vec::new();
        Ok(())
    }

    // The function now accepts a gif_link param from the user. We also reference the user from the Context
    pub fn add_gif(ctx: Context<AddGif>, gif_link: String) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        let user = &mut ctx.accounts.user;
        let user_address = &*user.to_account_info().key.to_string().clone();
        let url: String = gif_link.clone();
        let mut id = "0x".to_string();
        id.push_str(&user_address);
        id.push_str("_");
        id.push_str(&url);

        // Build the struct.a
        let item = ItemStruct {
            upvotes: 0,
            id,
            gif_link: gif_link.to_string(),
            user_address: *user.to_account_info().key,
        };

        // Add it to the gif_list vector.
        base_account.gif_list.push(item);
        base_account.total_gifs += 1;
        Ok(())
    }

    pub fn upvote_gif(ctx: Context<AddGif>, gif_id: String) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        let index = base_account
            .gif_list
            .iter()
            .position(|r| r.id == gif_id)
            .unwrap();

        let mut gif = &mut base_account.gif_list[index];
        gif.upvotes += 1;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct StartStuffOff<'info> {
    #[account(init, payer = user, space = 9000)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

// #[derive(Accounts)]
// pub struct Upvote<'info> {
//     #[account(mut)]
//     pub base_account: Account<'info, BaseAccount>,
//     #[account(mut)]
//     pub user: Signer<'info>,
// }

// Add the signer who calls the AddGif method to the struct so that we can save it
#[derive(Accounts)]
pub struct AddGif<'info> {
    #[account(mut)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
}

// Create a custom struct for us to work with.
#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct ItemStruct {
    pub gif_link: String,
    pub user_address: Pubkey,
    pub upvotes: u64,
    pub id: String,
}

#[account]
pub struct BaseAccount {
    pub total_gifs: u64,
    // Attach a Vector of type ItemStruct to the account.
    pub gif_list: Vec<ItemStruct>,
}
