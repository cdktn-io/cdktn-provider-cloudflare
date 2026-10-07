# `dataCloudflareZeroTrustCasbIntegration` Submodule <a name="`dataCloudflareZeroTrustCasbIntegration` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbIntegration <a name="DataCloudflareZeroTrustCasbIntegration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration cloudflare_zero_trust_casb_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

datacloudflarezerotrustcasbintegration.NewDataCloudflareZeroTrustCasbIntegration(scope Construct, id *string, config DataCloudflareZeroTrustCasbIntegrationConfig) DataCloudflareZeroTrustCasbIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig">DataCloudflareZeroTrustCasbIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig">DataCloudflareZeroTrustCasbIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustCasbIntegrationFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

datacloudflarezerotrustcasbintegration.DataCloudflareZeroTrustCasbIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

datacloudflarezerotrustcasbintegration.DataCloudflareZeroTrustCasbIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

datacloudflarezerotrustcasbintegration.DataCloudflareZeroTrustCasbIntegration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

datacloudflarezerotrustcasbintegration.DataCloudflareZeroTrustCasbIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustCasbIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustCasbIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.application">Application</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.authMethod">AuthMethod</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.authorizationLink">AuthorizationLink</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference">DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.credentialsExpiry">CredentialsExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.dlpProfiles">DlpProfiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference">DataCloudflareZeroTrustCasbIntegrationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.healthDetails">HealthDetails</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.isPaused">IsPaused</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.lastHydrated">LastHydrated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.updated">Updated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.useCases">UseCases</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.application"></a>

```go
func Application() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.authMethod"></a>

```go
func AuthMethod() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `AuthorizationLink`<sup>Required</sup> <a name="AuthorizationLink" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.authorizationLink"></a>

```go
func AuthorizationLink() DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference">DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `CredentialsExpiry`<sup>Required</sup> <a name="CredentialsExpiry" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.credentialsExpiry"></a>

```go
func CredentialsExpiry() *string
```

- *Type:* *string

---

##### `DlpProfiles`<sup>Required</sup> <a name="DlpProfiles" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.dlpProfiles"></a>

```go
func DlpProfiles() *[]*string
```

- *Type:* *[]*string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustCasbIntegrationFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference">DataCloudflareZeroTrustCasbIntegrationFilterOutputReference</a>

---

##### `HealthDetails`<sup>Required</sup> <a name="HealthDetails" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.healthDetails"></a>

```go
func HealthDetails() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `IsPaused`<sup>Required</sup> <a name="IsPaused" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.isPaused"></a>

```go
func IsPaused() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastHydrated`<sup>Required</sup> <a name="LastHydrated" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.lastHydrated"></a>

```go
func LastHydrated() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.updated"></a>

```go
func Updated() *string
```

- *Type:* *string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.useCases"></a>

```go
func UseCases() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbIntegrationAuthorizationLink <a name="DataCloudflareZeroTrustCasbIntegrationAuthorizationLink" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

&datacloudflarezerotrustcasbintegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink {

}
```


### DataCloudflareZeroTrustCasbIntegrationConfig <a name="DataCloudflareZeroTrustCasbIntegrationConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

&datacloudflarezerotrustcasbintegration.DataCloudflareZeroTrustCasbIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#account_id DataCloudflareZeroTrustCasbIntegration#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#filter DataCloudflareZeroTrustCasbIntegration#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Integration ID to look up. Exactly one of `id` or `filter` must be configured. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#account_id DataCloudflareZeroTrustCasbIntegration#account_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustCasbIntegrationFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#filter DataCloudflareZeroTrustCasbIntegration#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Integration ID to look up. Exactly one of `id` or `filter` must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#id DataCloudflareZeroTrustCasbIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareZeroTrustCasbIntegrationFilter <a name="DataCloudflareZeroTrustCasbIntegrationFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

&datacloudflarezerotrustcasbintegration.DataCloudflareZeroTrustCasbIntegrationFilter {
	Application: *string,
	Direction: *string,
	DlpEnabled: interface{},
	Order: *string,
	Page: *f64,
	PageSize: *f64,
	Search: *string,
	Status: *string,
	UseCases: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.application">Application</a></code> | <code>*string</code> | Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.direction">Direction</a></code> | <code>*string</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.dlpEnabled">DlpEnabled</a></code> | <code>interface{}</code> | Filter by DLP enabled status (true/false). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.order">Order</a></code> | <code>*string</code> | Field to order results by. Available values: "application", "created", "name", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.page">Page</a></code> | <code>*f64</code> | Page number within the paginated result set. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.pageSize">PageSize</a></code> | <code>*f64</code> | Number of results per page. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.search">Search</a></code> | <code>*string</code> | Search integrations by name or application. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.status">Status</a></code> | <code>*string</code> | Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.useCases">UseCases</a></code> | <code>*string</code> | Filter by one enabled use case (for example, casb or ces). |

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.application"></a>

```go
Application *string
```

- *Type:* *string

Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#application DataCloudflareZeroTrustCasbIntegration#application}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#direction DataCloudflareZeroTrustCasbIntegration#direction}

---

##### `DlpEnabled`<sup>Optional</sup> <a name="DlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.dlpEnabled"></a>

```go
DlpEnabled interface{}
```

- *Type:* interface{}

Filter by DLP enabled status (true/false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#dlp_enabled DataCloudflareZeroTrustCasbIntegration#dlp_enabled}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order results by. Available values: "application", "created", "name", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#order DataCloudflareZeroTrustCasbIntegration#order}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.page"></a>

```go
Page *f64
```

- *Type:* *f64

Page number within the paginated result set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#page DataCloudflareZeroTrustCasbIntegration#page}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#page_size DataCloudflareZeroTrustCasbIntegration#page_size}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.search"></a>

```go
Search *string
```

- *Type:* *string

Search integrations by name or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#search DataCloudflareZeroTrustCasbIntegration#search}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.status"></a>

```go
Status *string
```

- *Type:* *string

Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#status DataCloudflareZeroTrustCasbIntegration#status}

---

##### `UseCases`<sup>Optional</sup> <a name="UseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.useCases"></a>

```go
UseCases *string
```

- *Type:* *string

Filter by one enabled use case (for example, casb or ces).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#use_cases DataCloudflareZeroTrustCasbIntegration#use_cases}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference <a name="DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

datacloudflarezerotrustcasbintegration.NewDataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.components">Components</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink">DataCloudflareZeroTrustCasbIntegrationAuthorizationLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.components"></a>

```go
func Components() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustCasbIntegrationAuthorizationLink
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink">DataCloudflareZeroTrustCasbIntegrationAuthorizationLink</a>

---


### DataCloudflareZeroTrustCasbIntegrationFilterOutputReference <a name="DataCloudflareZeroTrustCasbIntegrationFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustcasbintegration"

datacloudflarezerotrustcasbintegration.NewDataCloudflareZeroTrustCasbIntegrationFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustCasbIntegrationFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetDlpEnabled">ResetDlpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetUseCases">ResetUseCases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplication` <a name="ResetApplication" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetApplication"></a>

```go
func ResetApplication()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetDlpEnabled` <a name="ResetDlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetDlpEnabled"></a>

```go
func ResetDlpEnabled()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPage` <a name="ResetPage" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetPage"></a>

```go
func ResetPage()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUseCases` <a name="ResetUseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetUseCases"></a>

```go
func ResetUseCases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.applicationInput">ApplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.dlpEnabledInput">DlpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageInput">PageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.useCasesInput">UseCasesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.application">Application</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.dlpEnabled">DlpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.page">Page</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.useCases">UseCases</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.applicationInput"></a>

```go
func ApplicationInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DlpEnabledInput`<sup>Optional</sup> <a name="DlpEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.dlpEnabledInput"></a>

```go
func DlpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageInput"></a>

```go
func PageInput() *f64
```

- *Type:* *f64

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UseCasesInput`<sup>Optional</sup> <a name="UseCasesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.useCasesInput"></a>

```go
func UseCasesInput() *string
```

- *Type:* *string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.application"></a>

```go
func Application() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `DlpEnabled`<sup>Required</sup> <a name="DlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.dlpEnabled"></a>

```go
func DlpEnabled() interface{}
```

- *Type:* interface{}

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.page"></a>

```go
func Page() *f64
```

- *Type:* *f64

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.useCases"></a>

```go
func UseCases() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



