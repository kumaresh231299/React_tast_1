import React from 'react'
import "./Comp.css"

function Comp({ arrObj }) {
    return (
        <>
            {arrObj.map((element, index) => {
                return (
                    <>
                        <div key={index}>
                            <div class="col ">
                                <div class="card p-3 rounded-4 my-2 info">
                                    <div class="heading text-center  border-bottom">
                                        <h6 class="text-secondary mb-1 ">{element.title}</h6>
                                        <h1 class="card-title mb-4">${element.amount}/month</h1>

                                    </div>
                                    <div class="card-body ">
                                        <p><i class="fa-solid fa-check"></i>&nbsp;{element.users}</p>
                                        <p><i class="fa-solid fa-check"></i>&nbsp;50GB Storage</p>
                                        <p><i class="fa-solid fa-check"></i>&nbsp;Unlimited Public Projects</p>
                                        <p><i class="fa-solid fa-check"></i>&nbsp;Community Access</p>
                                        <p class={element.title === "FREE" ? "text-secondary" : "text-dark "}><i class={element.title === "FREE" ? "fa-solid fa-xmark" : "fa-solid fa-check"}></i>&nbsp;Unlimited Private Projects</p>
                                        <p class={element.title === "FREE" ? "text-secondary" : "text-dark"}><i class={element.title === "FREE" ? "fa-solid fa-xmark" : "fa-solid fa-check"}></i> &nbsp;Dedicated Phone Support</p>
                                        <p class={element.title === "FREE" ? "text-secondary" : "text-dark"}><i class={element.title === "FREE" ? "fa-solid fa-xmark" : "fa-solid fa-check"}></i> &nbsp;Free Subdomain</p>
                                        <p class={element.title === "FREE" || element.title === "PLUS" ? "text-secondary" : "text-dark"}><i class={element.title === "FREE" || element.title === "PLUS" ? "fa-solid fa-xmark" : "fa-solid fa-check"}></i> &nbsp;Monthly Status Report</p>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary p-2 w-100 rounded-5">Button</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Comp
