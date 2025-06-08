import React, { FC } from 'react'
import Layout from '../../components/ui/Layout'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routesConstants'
import RegisterForm from '../../components/user/RegisterForm'

const Login: FC = () => {
    return (
        // Set the parent container to take up the full viewport height
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 2, backgroundColor: 'lightgray' }}>
                <Layout>
                    <img
                        src="/images/login_page.png"
                        alt="AuctionBay"
                        style={{
                            width: '968px', // Hug to 64px
                            height: '1024px', // Hug to 64px
                        }}
                    />
                </Layout>
            </div>

            <div style={{
                backgroundColor: 'lightgray',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '30px', // Rounded edges for the right container
                    minHeight: '100%',
                    minWidth: '450px',
                    maxWidth: '400px', // Optional: limit the width of the container
                    display: 'flex',
                    flexDirection: 'column', // Center items vertically
                    alignItems: 'center', // Center items horizontally
                }}>
                    <div className="circle" style={{marginBottom: '170px', marginTop: '20px'}}>
                        <img
                            src="/images/vector.png"
                            alt="AuctionBay"
                        />
                    </div>
                    <RegisterForm/>
                    <div style={{flex: 1}}></div>
                    {/* Create space to push the link to the bottom */}
                    <div className="fs-6" style={{marginBottom: '30px'}}>
                        Already have an account?{' '}
                        <Link
                            to={routes.LOGIN}
                            style={{
                                fontSize: '16px',
                                fontWeight: 700,
                                lineHeight: '24px',
                                textDecoration: 'none',
                                color: 'black'
                            }}
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login