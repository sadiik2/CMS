import{newE2EPage}from"@stencil/core/testing";describe("sc-cart-icon",(()=>{it("renders",(async()=>{const t=await newE2EPage();await t.setContent("<sc-cart-icon></sc-cart-icon>");const c=await t.find("sc-cart-icon");expect(c).toHaveClass("hydrated")}))}));