﻿using Models.Authentification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces.Queries
{
    public interface IAuthenticationQuery
    {
        Task<string> LoginIfUserExistsAsync(LoginModel loginModel);
    }
}