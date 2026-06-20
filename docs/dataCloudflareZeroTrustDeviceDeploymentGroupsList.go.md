# `dataCloudflareZeroTrustDeviceDeploymentGroupsList` Submodule <a name="`dataCloudflareZeroTrustDeviceDeploymentGroupsList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list cloudflare_zero_trust_device_deployment_groups_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.NewDataCloudflareZeroTrustDeviceDeploymentGroupsList(scope Construct, id *string, config DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig) DataCloudflareZeroTrustDeviceDeploymentGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroupsList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.DataCloudflareZeroTrustDeviceDeploymentGroupsList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.DataCloudflareZeroTrustDeviceDeploymentGroupsList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.DataCloudflareZeroTrustDeviceDeploymentGroupsList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.DataCloudflareZeroTrustDeviceDeploymentGroupsList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroupsList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDeploymentGroupsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustDeviceDeploymentGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDeploymentGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.result"></a>

```go
func Result() DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

&datacloudflarezerotrustdevicedeploymentgroupslist.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#account_id DataCloudflareZeroTrustDeviceDeploymentGroupsList#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#account_id DataCloudflareZeroTrustDeviceDeploymentGroupsList#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups_list#max_items DataCloudflareZeroTrustDeviceDeploymentGroupsList#max_items}

---

### DataCloudflareZeroTrustDeviceDeploymentGroupsListResult <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

&datacloudflarezerotrustdevicedeploymentgroupslist.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult {

}
```


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

&datacloudflarezerotrustdevicedeploymentgroupslist.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.NewDataCloudflareZeroTrustDeviceDeploymentGroupsListResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.NewDataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.policyIds">PolicyIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.versionConfig">VersionConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult">DataCloudflareZeroTrustDeviceDeploymentGroupsListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.policyIds"></a>

```go
func PolicyIds() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `VersionConfig`<sup>Required</sup> <a name="VersionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.versionConfig"></a>

```go
func VersionConfig() DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDeviceDeploymentGroupsListResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult">DataCloudflareZeroTrustDeviceDeploymentGroupsListResult</a>

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.NewDataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustdevicedeploymentgroupslist"

datacloudflarezerotrustdevicedeploymentgroupslist.NewDataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.targetEnvironment">TargetEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetEnvironment`<sup>Required</sup> <a name="TargetEnvironment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.targetEnvironment"></a>

```go
func TargetEnvironment() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig</a>

---



