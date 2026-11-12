# `dataCloudflareZeroTrustCwsBasicAuthSecret` Submodule <a name="`dataCloudflareZeroTrustCwsBasicAuthSecret` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecret <a name="DataCloudflareZeroTrustCwsBasicAuthSecret" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret cloudflare_zero_trust_cws_basic_auth_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsbasicauthsecret"

datacloudflarezerotrustcwsbasicauthsecret.NewDataCloudflareZeroTrustCwsBasicAuthSecret(scope Construct, id *string, config DataCloudflareZeroTrustCwsBasicAuthSecretConfig) DataCloudflareZeroTrustCwsBasicAuthSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig">DataCloudflareZeroTrustCwsBasicAuthSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig">DataCloudflareZeroTrustCwsBasicAuthSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustCwsBasicAuthSecretFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetSecretId"></a>

```go
func ResetSecretId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthSecret resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsbasicauthsecret"

datacloudflarezerotrustcwsbasicauthsecret.DataCloudflareZeroTrustCwsBasicAuthSecret_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsbasicauthsecret"

datacloudflarezerotrustcwsbasicauthsecret.DataCloudflareZeroTrustCwsBasicAuthSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsbasicauthsecret"

datacloudflarezerotrustcwsbasicauthsecret.DataCloudflareZeroTrustCwsBasicAuthSecret_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsbasicauthsecret"

datacloudflarezerotrustcwsbasicauthsecret.DataCloudflareZeroTrustCwsBasicAuthSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsBasicAuthSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustCwsBasicAuthSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsBasicAuthSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference">DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.credentialIdInput">CredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.credentialId">CredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference">DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CredentialIdInput`<sup>Optional</sup> <a name="CredentialIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.credentialIdInput"></a>

```go
func CredentialIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CredentialId`<sup>Required</sup> <a name="CredentialId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.credentialId"></a>

```go
func CredentialId() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecretConfig <a name="DataCloudflareZeroTrustCwsBasicAuthSecretConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsbasicauthsecret"

&datacloudflarezerotrustcwsbasicauthsecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	CredentialId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter,
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.credentialId">CredentialId</a></code> | <code>*string</code> | ID of the parent credential. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#filter DataCloudflareZeroTrustCwsBasicAuthSecret#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.secretId">SecretId</a></code> | <code>*string</code> | ID of the secret to retrieve. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#account_id DataCloudflareZeroTrustCwsBasicAuthSecret#account_id}

---

##### `CredentialId`<sup>Required</sup> <a name="CredentialId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.credentialId"></a>

```go
CredentialId *string
```

- *Type:* *string

ID of the parent credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#credential_id DataCloudflareZeroTrustCwsBasicAuthSecret#credential_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustCwsBasicAuthSecretFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#filter DataCloudflareZeroTrustCwsBasicAuthSecret#filter}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

ID of the secret to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#secret_id DataCloudflareZeroTrustCwsBasicAuthSecret#secret_id}

---

### DataCloudflareZeroTrustCwsBasicAuthSecretFilter <a name="DataCloudflareZeroTrustCwsBasicAuthSecretFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsbasicauthsecret"

&datacloudflarezerotrustcwsbasicauthsecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter {
	Direction: *string,
	Order: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.property.direction">Direction</a></code> | <code>*string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.property.order">Order</a></code> | <code>*string</code> | Field to order results by (default: created_at) Available values: "created_at". |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#direction DataCloudflareZeroTrustCwsBasicAuthSecret#direction}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order results by (default: created_at) Available values: "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#order DataCloudflareZeroTrustCwsBasicAuthSecret#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference <a name="DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsbasicauthsecret"

datacloudflarezerotrustcwsbasicauthsecret.NewDataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



