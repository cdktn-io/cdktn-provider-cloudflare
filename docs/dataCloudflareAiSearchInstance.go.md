# `dataCloudflareAiSearchInstance` Submodule <a name="`dataCloudflareAiSearchInstance` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiSearchInstance <a name="DataCloudflareAiSearchInstance" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstance(scope Construct, id *string, config DataCloudflareAiSearchInstanceConfig) DataCloudflareAiSearchInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig">DataCloudflareAiSearchInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig">DataCloudflareAiSearchInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter"></a>

```go
func PutFilter(value DataCloudflareAiSearchInstanceFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAiSearchInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.DataCloudflareAiSearchInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.DataCloudflareAiSearchInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.DataCloudflareAiSearchInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.DataCloudflareAiSearchInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareAiSearchInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAiSearchInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAiSearchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiSearchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aiGatewayId">AiGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aisearchModel">AisearchModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cache">Cache</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cacheThreshold">CacheThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkOverlap">ChunkOverlap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkSize">ChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList">DataCloudflareAiSearchInstanceCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.embeddingModel">EmbeddingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.enable">Enable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference">DataCloudflareAiSearchInstanceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fusionMethod">FusionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.hybridSearchEnabled">HybridSearchEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lastActivity">LastActivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.maxNumResults">MaxNumResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference">DataCloudflareAiSearchInstanceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedBy">ModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.paused">Paused</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointId">PublicEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.reranking">Reranking</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rerankingModel">RerankingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.retrievalOptions">RetrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference">DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteModel">RewriteModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteQuery">RewriteQuery</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.sourceParams">SourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference">DataCloudflareAiSearchInstanceSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tokenId">TokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.vectorizeName">VectorizeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AiGatewayId`<sup>Required</sup> <a name="AiGatewayId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aiGatewayId"></a>

```go
func AiGatewayId() *string
```

- *Type:* *string

---

##### `AisearchModel`<sup>Required</sup> <a name="AisearchModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aisearchModel"></a>

```go
func AisearchModel() *string
```

- *Type:* *string

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cache"></a>

```go
func Cache() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CacheThreshold`<sup>Required</sup> <a name="CacheThreshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cacheThreshold"></a>

```go
func CacheThreshold() *string
```

- *Type:* *string

---

##### `ChunkOverlap`<sup>Required</sup> <a name="ChunkOverlap" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkOverlap"></a>

```go
func ChunkOverlap() *f64
```

- *Type:* *f64

---

##### `ChunkSize`<sup>Required</sup> <a name="ChunkSize" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkSize"></a>

```go
func ChunkSize() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.customMetadata"></a>

```go
func CustomMetadata() DataCloudflareAiSearchInstanceCustomMetadataList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList">DataCloudflareAiSearchInstanceCustomMetadataList</a>

---

##### `EmbeddingModel`<sup>Required</sup> <a name="EmbeddingModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.embeddingModel"></a>

```go
func EmbeddingModel() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filter"></a>

```go
func Filter() DataCloudflareAiSearchInstanceFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference">DataCloudflareAiSearchInstanceFilterOutputReference</a>

---

##### `FusionMethod`<sup>Required</sup> <a name="FusionMethod" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fusionMethod"></a>

```go
func FusionMethod() *string
```

- *Type:* *string

---

##### `HybridSearchEnabled`<sup>Required</sup> <a name="HybridSearchEnabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.hybridSearchEnabled"></a>

```go
func HybridSearchEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastActivity`<sup>Required</sup> <a name="LastActivity" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lastActivity"></a>

```go
func LastActivity() *string
```

- *Type:* *string

---

##### `MaxNumResults`<sup>Required</sup> <a name="MaxNumResults" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.maxNumResults"></a>

```go
func MaxNumResults() *f64
```

- *Type:* *f64

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.metadata"></a>

```go
func Metadata() DataCloudflareAiSearchInstanceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference">DataCloudflareAiSearchInstanceMetadataOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedBy"></a>

```go
func ModifiedBy() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.paused"></a>

```go
func Paused() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PublicEndpointId`<sup>Required</sup> <a name="PublicEndpointId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointId"></a>

```go
func PublicEndpointId() *string
```

- *Type:* *string

---

##### `PublicEndpointParams`<sup>Required</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointParams"></a>

```go
func PublicEndpointParams() DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference</a>

---

##### `Reranking`<sup>Required</sup> <a name="Reranking" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.reranking"></a>

```go
func Reranking() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RerankingModel`<sup>Required</sup> <a name="RerankingModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rerankingModel"></a>

```go
func RerankingModel() *string
```

- *Type:* *string

---

##### `RetrievalOptions`<sup>Required</sup> <a name="RetrievalOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.retrievalOptions"></a>

```go
func RetrievalOptions() DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference">DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference</a>

---

##### `RewriteModel`<sup>Required</sup> <a name="RewriteModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteModel"></a>

```go
func RewriteModel() *string
```

- *Type:* *string

---

##### `RewriteQuery`<sup>Required</sup> <a name="RewriteQuery" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteQuery"></a>

```go
func RewriteQuery() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.scoreThreshold"></a>

```go
func ScoreThreshold() *f64
```

- *Type:* *f64

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceParams`<sup>Required</sup> <a name="SourceParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.sourceParams"></a>

```go
func SourceParams() DataCloudflareAiSearchInstanceSourceParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference">DataCloudflareAiSearchInstanceSourceParamsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tokenId"></a>

```go
func TokenId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VectorizeName`<sup>Required</sup> <a name="VectorizeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.vectorizeName"></a>

```go
func VectorizeName() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiSearchInstanceConfig <a name="DataCloudflareAiSearchInstanceConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Use your AI Search ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.filter"></a>

```go
Filter DataCloudflareAiSearchInstanceFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Use your AI Search ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#id DataCloudflareAiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareAiSearchInstanceCustomMetadata <a name="DataCloudflareAiSearchInstanceCustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceCustomMetadata {

}
```


### DataCloudflareAiSearchInstanceFilter <a name="DataCloudflareAiSearchInstanceFilter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceFilter {
	Search: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.search">Search</a></code> | <code>*string</code> | Search by id. |

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.search"></a>

```go
Search *string
```

- *Type:* *string

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#search DataCloudflareAiSearchInstance#search}

---

### DataCloudflareAiSearchInstanceMetadata <a name="DataCloudflareAiSearchInstanceMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceMetadata {

}
```


### DataCloudflareAiSearchInstancePublicEndpointParams <a name="DataCloudflareAiSearchInstancePublicEndpointParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstancePublicEndpointParams {

}
```


### DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint <a name="DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint {

}
```


### DataCloudflareAiSearchInstancePublicEndpointParamsMcp <a name="DataCloudflareAiSearchInstancePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp {

}
```


### DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit <a name="DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit {

}
```


### DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint <a name="DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint {

}
```


### DataCloudflareAiSearchInstanceRetrievalOptions <a name="DataCloudflareAiSearchInstanceRetrievalOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceRetrievalOptions {

}
```


### DataCloudflareAiSearchInstanceSourceParams <a name="DataCloudflareAiSearchInstanceSourceParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceSourceParams {

}
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawler <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler {

}
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions {

}
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

&datacloudflareaisearchinstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiSearchInstanceCustomMetadataList <a name="DataCloudflareAiSearchInstanceCustomMetadataList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceCustomMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareAiSearchInstanceCustomMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get"></a>

```go
func Get(index *f64) DataCloudflareAiSearchInstanceCustomMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareAiSearchInstanceCustomMetadataOutputReference <a name="DataCloudflareAiSearchInstanceCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceCustomMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareAiSearchInstanceCustomMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata">DataCloudflareAiSearchInstanceCustomMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstanceCustomMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata">DataCloudflareAiSearchInstanceCustomMetadata</a>

---


### DataCloudflareAiSearchInstanceFilterOutputReference <a name="DataCloudflareAiSearchInstanceFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstanceFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetSearch"></a>

```go
func ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareAiSearchInstanceMetadataOutputReference <a name="DataCloudflareAiSearchInstanceMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstanceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard">CreatedFromAisearchWizard</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.workerDomain">WorkerDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata">DataCloudflareAiSearchInstanceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedFromAisearchWizard`<sup>Required</sup> <a name="CreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard"></a>

```go
func CreatedFromAisearchWizard() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `WorkerDomain`<sup>Required</sup> <a name="WorkerDomain" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.workerDomain"></a>

```go
func WorkerDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstanceMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata">DataCloudflareAiSearchInstanceMetadata</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp">DataCloudflareAiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancePublicEndpointParamsMcp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp">DataCloudflareAiSearchInstancePublicEndpointParamsMcp</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstancePublicEndpointParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts">AuthorizedHosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams">DataCloudflareAiSearchInstancePublicEndpointParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedHosts`<sup>Required</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```go
func AuthorizedHosts() *[]*string
```

- *Type:* *[]*string

---

##### `ChatCompletionsEndpoint`<sup>Required</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```go
func ChatCompletionsEndpoint() DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Mcp`<sup>Required</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.mcp"></a>

```go
func Mcp() DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference</a>

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit"></a>

```go
func RateLimit() DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference</a>

---

##### `SearchEndpoint`<sup>Required</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```go
func SearchEndpoint() DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancePublicEndpointParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams">DataCloudflareAiSearchInstancePublicEndpointParams</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs">PeriodMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique">Technique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodMs`<sup>Required</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```go
func PeriodMs() *f64
```

- *Type:* *f64

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```go
func Technique() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---


### DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference <a name="DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceRetrievalOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode">KeywordMatchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions">DataCloudflareAiSearchInstanceRetrievalOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeywordMatchMode`<sup>Required</sup> <a name="KeywordMatchMode" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode"></a>

```go
func KeywordMatchMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstanceRetrievalOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions">DataCloudflareAiSearchInstanceRetrievalOptions</a>

---


### DataCloudflareAiSearchInstanceSourceParamsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceSourceParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstanceSourceParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.excludeItems">ExcludeItems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.includeItems">IncludeItems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.webCrawler">WebCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams">DataCloudflareAiSearchInstanceSourceParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeItems`<sup>Required</sup> <a name="ExcludeItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.excludeItems"></a>

```go
func ExcludeItems() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeItems`<sup>Required</sup> <a name="IncludeItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.includeItems"></a>

```go
func IncludeItems() *[]*string
```

- *Type:* *[]*string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction"></a>

```go
func R2Jurisdiction() *string
```

- *Type:* *string

---

##### `WebCrawler`<sup>Required</sup> <a name="WebCrawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.webCrawler"></a>

```go
func WebCrawler() DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstanceSourceParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams">DataCloudflareAiSearchInstanceSourceParams</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions">ParseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType">ParseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler">DataCloudflareAiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParseOptions`<sup>Required</sup> <a name="ParseOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```go
func ParseOptions() DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `ParseType`<sup>Required</sup> <a name="ParseType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```go
func ParseType() *string
```

- *Type:* *string

---

##### `StoreOptions`<sup>Required</sup> <a name="StoreOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```go
func StoreOptions() DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstanceSourceParamsWebCrawler
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler">DataCloudflareAiSearchInstanceSourceParamsWebCrawler</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">IncludeHeaders</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">IncludeImages</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">SpecificSitemaps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">UseBrowserRendering</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeHeaders`<sup>Required</sup> <a name="IncludeHeaders" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```go
func IncludeHeaders() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IncludeImages`<sup>Required</sup> <a name="IncludeImages" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```go
func IncludeImages() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SpecificSitemaps`<sup>Required</sup> <a name="SpecificSitemaps" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```go
func SpecificSitemaps() *[]*string
```

- *Type:* *[]*string

---

##### `UseBrowserRendering`<sup>Required</sup> <a name="UseBrowserRendering" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```go
func UseBrowserRendering() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstance"

datacloudflareaisearchinstance.NewDataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">StorageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```go
func R2Jurisdiction() *string
```

- *Type:* *string

---

##### `StorageId`<sup>Required</sup> <a name="StorageId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```go
func StorageId() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---



