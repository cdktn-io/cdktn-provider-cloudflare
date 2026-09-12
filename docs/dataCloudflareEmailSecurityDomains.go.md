# `dataCloudflareEmailSecurityDomains` Submodule <a name="`dataCloudflareEmailSecurityDomains` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomains <a name="DataCloudflareEmailSecurityDomains" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains cloudflare_email_security_domains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.NewDataCloudflareEmailSecurityDomains(scope Construct, id *string, config DataCloudflareEmailSecurityDomainsConfig) DataCloudflareEmailSecurityDomains
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig">DataCloudflareEmailSecurityDomainsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig">DataCloudflareEmailSecurityDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode">ResetActiveDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode">ResetAllowedDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetActiveDeliveryMode` <a name="ResetActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode"></a>

```go
func ResetActiveDeliveryMode()
```

##### `ResetAllowedDeliveryMode` <a name="ResetAllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode"></a>

```go
func ResetAllowedDeliveryMode()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId"></a>

```go
func ResetIntegrationId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.DataCloudflareEmailSecurityDomains_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.DataCloudflareEmailSecurityDomains_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.DataCloudflareEmailSecurityDomains_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.DataCloudflareEmailSecurityDomains_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareEmailSecurityDomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareEmailSecurityDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput">ActiveDeliveryModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput">AllowedDeliveryModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput">DomainInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode">ActiveDeliveryMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode">AllowedDeliveryMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain">Domain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result"></a>

```go
func Result() DataCloudflareEmailSecurityDomainsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ActiveDeliveryModeInput`<sup>Optional</sup> <a name="ActiveDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput"></a>

```go
func ActiveDeliveryModeInput() *string
```

- *Type:* *string

---

##### `AllowedDeliveryModeInput`<sup>Optional</sup> <a name="AllowedDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput"></a>

```go
func AllowedDeliveryModeInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput"></a>

```go
func DomainInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ActiveDeliveryMode`<sup>Required</sup> <a name="ActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode"></a>

```go
func ActiveDeliveryMode() *string
```

- *Type:* *string

---

##### `AllowedDeliveryMode`<sup>Required</sup> <a name="AllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode"></a>

```go
func AllowedDeliveryMode() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain"></a>

```go
func Domain() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainsConfig <a name="DataCloudflareEmailSecurityDomainsConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

&datacloudflareemailsecuritydomains.DataCloudflareEmailSecurityDomainsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ActiveDeliveryMode: *string,
	AllowedDeliveryMode: *string,
	Direction: *string,
	Domain: *[]*string,
	IntegrationId: *string,
	MaxItems: *f64,
	Order: *string,
	Search: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode">ActiveDeliveryMode</a></code> | <code>*string</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode">AllowedDeliveryMode</a></code> | <code>*string</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction">Direction</a></code> | <code>*string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain">Domain</a></code> | <code>*[]*string</code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order">Order</a></code> | <code>*string</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search">Search</a></code> | <code>*string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status">Status</a></code> | <code>*string</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#account_id DataCloudflareEmailSecurityDomains#account_id}

---

##### `ActiveDeliveryMode`<sup>Optional</sup> <a name="ActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode"></a>

```go
ActiveDeliveryMode *string
```

- *Type:* *string

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#active_delivery_mode DataCloudflareEmailSecurityDomains#active_delivery_mode}

---

##### `AllowedDeliveryMode`<sup>Optional</sup> <a name="AllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode"></a>

```go
AllowedDeliveryMode *string
```

- *Type:* *string

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#allowed_delivery_mode DataCloudflareEmailSecurityDomains#allowed_delivery_mode}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#direction DataCloudflareEmailSecurityDomains#direction}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain"></a>

```go
Domain *[]*string
```

- *Type:* *[]*string

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#domain DataCloudflareEmailSecurityDomains#domain}

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#integration_id DataCloudflareEmailSecurityDomains#integration_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#max_items DataCloudflareEmailSecurityDomains#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#order DataCloudflareEmailSecurityDomains#order}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#search DataCloudflareEmailSecurityDomains#search}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#status DataCloudflareEmailSecurityDomains#status}

---

### DataCloudflareEmailSecurityDomainsResult <a name="DataCloudflareEmailSecurityDomainsResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

&datacloudflareemailsecuritydomains.DataCloudflareEmailSecurityDomainsResult {

}
```


### DataCloudflareEmailSecurityDomainsResultAuthorization <a name="DataCloudflareEmailSecurityDomainsResultAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

&datacloudflareemailsecuritydomains.DataCloudflareEmailSecurityDomainsResultAuthorization {

}
```


### DataCloudflareEmailSecurityDomainsResultEmailsProcessed <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

&datacloudflareemailsecuritydomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.NewDataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized">Authorized</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorized`<sup>Required</sup> <a name="Authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized"></a>

```go
func Authorized() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailSecurityDomainsResultAuthorization
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a>

---


### DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.NewDataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed">TotalEmailsProcessed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">TotalEmailsProcessedPrevious</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `TotalEmailsProcessed`<sup>Required</sup> <a name="TotalEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```go
func TotalEmailsProcessed() *f64
```

- *Type:* *f64

---

##### `TotalEmailsProcessedPrevious`<sup>Required</sup> <a name="TotalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```go
func TotalEmailsProcessedPrevious() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailSecurityDomainsResultEmailsProcessed
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainsResultList <a name="DataCloudflareEmailSecurityDomainsResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.NewDataCloudflareEmailSecurityDomainsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareEmailSecurityDomainsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareEmailSecurityDomainsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareEmailSecurityDomainsResultOutputReference <a name="DataCloudflareEmailSecurityDomainsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecuritydomains"

datacloudflareemailsecuritydomains.NewDataCloudflareEmailSecurityDomainsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareEmailSecurityDomainsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes">AllowedDeliveryModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus">DmarcStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions">DropDispositions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed">EmailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider">InboxProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions">IpRestrictions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops">LookbackHops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId">O365TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound">RequireTlsInbound</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound">RequireTlsOutbound</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus">SpfStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport">Transport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedDeliveryModes`<sup>Required</sup> <a name="AllowedDeliveryModes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes"></a>

```go
func AllowedDeliveryModes() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization"></a>

```go
func Authorization() DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DmarcStatus`<sup>Required</sup> <a name="DmarcStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus"></a>

```go
func DmarcStatus() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DropDispositions`<sup>Required</sup> <a name="DropDispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions"></a>

```go
func DropDispositions() *[]*string
```

- *Type:* *[]*string

---

##### `EmailsProcessed`<sup>Required</sup> <a name="EmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed"></a>

```go
func EmailsProcessed() DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a>

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InboxProvider`<sup>Required</sup> <a name="InboxProvider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider"></a>

```go
func InboxProvider() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `IpRestrictions`<sup>Required</sup> <a name="IpRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions"></a>

```go
func IpRestrictions() *[]*string
```

- *Type:* *[]*string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `LookbackHops`<sup>Required</sup> <a name="LookbackHops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops"></a>

```go
func LookbackHops() *f64
```

- *Type:* *f64

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `O365TenantId`<sup>Required</sup> <a name="O365TenantId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId"></a>

```go
func O365TenantId() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RequireTlsInbound`<sup>Required</sup> <a name="RequireTlsInbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound"></a>

```go
func RequireTlsInbound() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RequireTlsOutbound`<sup>Required</sup> <a name="RequireTlsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound"></a>

```go
func RequireTlsOutbound() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SpfStatus`<sup>Required</sup> <a name="SpfStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus"></a>

```go
func SpfStatus() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport"></a>

```go
func Transport() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailSecurityDomainsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a>

---



