import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "../Auth/Login";
import Logo from "../Global/Logo";
import Signup from "../Auth/Signup";

const Authdialog = ({ }) => {
    return (
        <Dialog>
            <DialogTrigger>Login</DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="account" className=" w-full flex flex-col items-center  justify-center">

                    <TabsList>
                        <TabsTrigger value="account">LOGIN</TabsTrigger>
                        <TabsTrigger value="password">SIGNUP</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account" className="w-full">
                        <Login />
                    </TabsContent>
                    <TabsContent value="password" className="w-full">
                        <Signup />
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>

    );
}

export default Authdialog;