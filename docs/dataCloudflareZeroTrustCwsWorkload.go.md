# `dataCloudflareZeroTrustCwsWorkload` Submodule <a name="`dataCloudflareZeroTrustCwsWorkload` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsWorkload <a name="DataCloudflareZeroTrustCwsWorkload" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload cloudflare_zero_trust_cws_workload}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkload"

datacloudflarezerotrustcwsworkload.NewDataCloudflareZeroTrustCwsWorkload(scope Construct, id *string, config DataCloudflareZeroTrustCwsWorkloadConfig) DataCloudflareZeroTrustCwsWorkload
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig">DataCloudflareZeroTrustCwsWorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig">DataCloudflareZeroTrustCwsWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.putFindOneBy">PutFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetFindOneBy">ResetFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetWorkloadId">ResetWorkloadId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFindOneBy` <a name="PutFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.putFindOneBy"></a>

```go
func PutFindOneBy(value DataCloudflareZeroTrustCwsWorkloadFindOneBy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.putFindOneBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a>

---

##### `ResetFindOneBy` <a name="ResetFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetFindOneBy"></a>

```go
func ResetFindOneBy()
```

##### `ResetWorkloadId` <a name="ResetWorkloadId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.resetWorkloadId"></a>

```go
func ResetWorkloadId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsWorkload resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkload"

datacloudflarezerotrustcwsworkload.DataCloudflareZeroTrustCwsWorkload_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkload"

datacloudflarezerotrustcwsworkload.DataCloudflareZeroTrustCwsWorkload_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkload"

datacloudflarezerotrustcwsworkload.DataCloudflareZeroTrustCwsWorkload_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkload"

datacloudflarezerotrustcwsworkload.DataCloudflareZeroTrustCwsWorkload_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsWorkload resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustCwsWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.findOneBy">FindOneBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference">DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.findOneByInput">FindOneByInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.workloadIdInput">WorkloadIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.workloadId">WorkloadId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `FindOneBy`<sup>Required</sup> <a name="FindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.findOneBy"></a>

```go
func FindOneBy() DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference">DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FindOneByInput`<sup>Optional</sup> <a name="FindOneByInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.findOneByInput"></a>

```go
func FindOneByInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadIdInput`<sup>Optional</sup> <a name="WorkloadIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.workloadIdInput"></a>

```go
func WorkloadIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `WorkloadId`<sup>Required</sup> <a name="WorkloadId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.workloadId"></a>

```go
func WorkloadId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkload.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsWorkloadConfig <a name="DataCloudflareZeroTrustCwsWorkloadConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkload"

&datacloudflarezerotrustcwsworkload.DataCloudflareZeroTrustCwsWorkloadConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	FindOneBy: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy,
	WorkloadId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.findOneBy">FindOneBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#find_one_by DataCloudflareZeroTrustCwsWorkload#find_one_by}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.workloadId">WorkloadId</a></code> | <code>*string</code> | ID of the workload to retrieve. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#account_id DataCloudflareZeroTrustCwsWorkload#account_id}

---

##### `FindOneBy`<sup>Optional</sup> <a name="FindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.findOneBy"></a>

```go
FindOneBy DataCloudflareZeroTrustCwsWorkloadFindOneBy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy">DataCloudflareZeroTrustCwsWorkloadFindOneBy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#find_one_by DataCloudflareZeroTrustCwsWorkload#find_one_by}.

---

##### `WorkloadId`<sup>Optional</sup> <a name="WorkloadId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadConfig.property.workloadId"></a>

```go
WorkloadId *string
```

- *Type:* *string

ID of the workload to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#workload_id DataCloudflareZeroTrustCwsWorkload#workload_id}

---

### DataCloudflareZeroTrustCwsWorkloadFindOneBy <a name="DataCloudflareZeroTrustCwsWorkloadFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkload"

&datacloudflarezerotrustcwsworkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy {
	Direction: *string,
	Name: *string,
	Order: *string,
	PolicySetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.direction">Direction</a></code> | <code>*string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.name">Name</a></code> | <code>*string</code> | Filter by workload name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.order">Order</a></code> | <code>*string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.policySetId">PolicySetId</a></code> | <code>*string</code> | Filter to workloads attached to this policy set. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#direction DataCloudflareZeroTrustCwsWorkload#direction}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Filter by workload name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#name DataCloudflareZeroTrustCwsWorkload#name}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#order DataCloudflareZeroTrustCwsWorkload#order}

---

##### `PolicySetId`<sup>Optional</sup> <a name="PolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneBy.property.policySetId"></a>

```go
PolicySetId *string
```

- *Type:* *string

Filter to workloads attached to this policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_workload#policy_set_id DataCloudflareZeroTrustCwsWorkload#policy_set_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference <a name="DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwsworkload"

datacloudflarezerotrustcwsworkload.NewDataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetPolicySetId">ResetPolicySetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPolicySetId` <a name="ResetPolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.resetPolicySetId"></a>

```go
func ResetPolicySetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.policySetIdInput">PolicySetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.policySetId">PolicySetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `PolicySetIdInput`<sup>Optional</sup> <a name="PolicySetIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.policySetIdInput"></a>

```go
func PolicySetIdInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `PolicySetId`<sup>Required</sup> <a name="PolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.policySetId"></a>

```go
func PolicySetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsWorkload.DataCloudflareZeroTrustCwsWorkloadFindOneByOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



