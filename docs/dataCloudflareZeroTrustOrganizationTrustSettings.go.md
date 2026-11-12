# `dataCloudflareZeroTrustOrganizationTrustSettings` Submodule <a name="`dataCloudflareZeroTrustOrganizationTrustSettings` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustOrganizationTrustSettings <a name="DataCloudflareZeroTrustOrganizationTrustSettings" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_organization_trust_settings cloudflare_zero_trust_organization_trust_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustorganizationtrustsettings"

datacloudflarezerotrustorganizationtrustsettings.NewDataCloudflareZeroTrustOrganizationTrustSettings(scope Construct, id *string, config DataCloudflareZeroTrustOrganizationTrustSettingsConfig) DataCloudflareZeroTrustOrganizationTrustSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig">DataCloudflareZeroTrustOrganizationTrustSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig">DataCloudflareZeroTrustOrganizationTrustSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustOrganizationTrustSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustorganizationtrustsettings"

datacloudflarezerotrustorganizationtrustsettings.DataCloudflareZeroTrustOrganizationTrustSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustorganizationtrustsettings"

datacloudflarezerotrustorganizationtrustsettings.DataCloudflareZeroTrustOrganizationTrustSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustorganizationtrustsettings"

datacloudflarezerotrustorganizationtrustsettings.DataCloudflareZeroTrustOrganizationTrustSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustorganizationtrustsettings"

datacloudflarezerotrustorganizationtrustsettings.DataCloudflareZeroTrustOrganizationTrustSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustOrganizationTrustSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustOrganizationTrustSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustOrganizationTrustSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_organization_trust_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustOrganizationTrustSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrg">GrantTrustToAllAccountsInOrg</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.trustingAccounts">TrustingAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `GrantTrustToAllAccountsInOrg`<sup>Required</sup> <a name="GrantTrustToAllAccountsInOrg" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrg"></a>

```go
func GrantTrustToAllAccountsInOrg() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TrustingAccounts`<sup>Required</sup> <a name="TrustingAccounts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.trustingAccounts"></a>

```go
func TrustingAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustOrganizationTrustSettingsConfig <a name="DataCloudflareZeroTrustOrganizationTrustSettingsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustorganizationtrustsettings"

&datacloudflarezerotrustorganizationtrustsettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_organization_trust_settings#account_id DataCloudflareZeroTrustOrganizationTrustSettings#account_id}

---



