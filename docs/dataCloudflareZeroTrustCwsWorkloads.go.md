# `dataCloudflareZeroTrustCwsWorkloads` Submodule <a name="`dataCloudflareZeroTrustCwsWorkloads` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsWorkloads <a name="DataCloudflareZeroTrustCwsWorkloads" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workloads cloudflare_zero_trust_cws_workloads}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

datacloudflarezerotrustcwsworkloads.NewDataCloudflareZeroTrustCwsWorkloads(scope Construct, id *string, config DataCloudflareZeroTrustCwsWorkloadsConfig) DataCloudflareZeroTrustCwsWorkloads
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig">DataCloudflareZeroTrustCwsWorkloadsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig">DataCloudflareZeroTrustCwsWorkloadsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetPolicySetId">ResetPolicySetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPolicySetId` <a name="ResetPolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.resetPolicySetId"></a>

```go
func ResetPolicySetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsWorkloads resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

datacloudflarezerotrustcwsworkloads.DataCloudflareZeroTrustCwsWorkloads_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

datacloudflarezerotrustcwsworkloads.DataCloudflareZeroTrustCwsWorkloads_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

datacloudflarezerotrustcwsworkloads.DataCloudflareZeroTrustCwsWorkloads_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

datacloudflarezerotrustcwsworkloads.DataCloudflareZeroTrustCwsWorkloads_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsWorkloads resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsWorkloads to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustCwsWorkloads that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workloads#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsWorkloads to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList">DataCloudflareZeroTrustCwsWorkloadsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.policySetIdInput">PolicySetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.policySetId">PolicySetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.result"></a>

```go
func Result() DataCloudflareZeroTrustCwsWorkloadsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList">DataCloudflareZeroTrustCwsWorkloadsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `PolicySetIdInput`<sup>Optional</sup> <a name="PolicySetIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.policySetIdInput"></a>

```go
func PolicySetIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `PolicySetId`<sup>Required</sup> <a name="PolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.policySetId"></a>

```go
func PolicySetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloads.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsWorkloadsConfig <a name="DataCloudflareZeroTrustCwsWorkloadsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

&datacloudflarezerotrustcwsworkloads.DataCloudflareZeroTrustCwsWorkloadsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Direction: *string,
	MaxItems: *f64,
	Name: *string,
	Order: *string,
	PolicySetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.direction">Direction</a></code> | <code>*string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.name">Name</a></code> | <code>*string</code> | Filter by workload name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.order">Order</a></code> | <code>*string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.policySetId">PolicySetId</a></code> | <code>*string</code> | Filter to workloads attached to this policy set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workloads#account_id DataCloudflareZeroTrustCwsWorkloads#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workloads#direction DataCloudflareZeroTrustCwsWorkloads#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workloads#max_items DataCloudflareZeroTrustCwsWorkloads#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Filter by workload name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workloads#name DataCloudflareZeroTrustCwsWorkloads#name}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workloads#order DataCloudflareZeroTrustCwsWorkloads#order}

---

##### `PolicySetId`<sup>Optional</sup> <a name="PolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsConfig.property.policySetId"></a>

```go
PolicySetId *string
```

- *Type:* *string

Filter to workloads attached to this policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workloads#policy_set_id DataCloudflareZeroTrustCwsWorkloads#policy_set_id}

---

### DataCloudflareZeroTrustCwsWorkloadsResult <a name="DataCloudflareZeroTrustCwsWorkloadsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

&datacloudflarezerotrustcwsworkloads.DataCloudflareZeroTrustCwsWorkloadsResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsWorkloadsResultList <a name="DataCloudflareZeroTrustCwsWorkloadsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

datacloudflarezerotrustcwsworkloads.NewDataCloudflareZeroTrustCwsWorkloadsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustCwsWorkloadsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustCwsWorkloadsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustCwsWorkloadsResultOutputReference <a name="DataCloudflareZeroTrustCwsWorkloadsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkloads"

datacloudflarezerotrustcwsworkloads.NewDataCloudflareZeroTrustCwsWorkloadsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustCwsWorkloadsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResult">DataCloudflareZeroTrustCwsWorkloadsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustCwsWorkloadsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkloads.DataCloudflareZeroTrustCwsWorkloadsResult">DataCloudflareZeroTrustCwsWorkloadsResult</a>

---



