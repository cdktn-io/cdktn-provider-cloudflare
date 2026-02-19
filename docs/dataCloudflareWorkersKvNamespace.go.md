# `dataCloudflareWorkersKvNamespace` Submodule <a name="`dataCloudflareWorkersKvNamespace` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersKvNamespace <a name="DataCloudflareWorkersKvNamespace" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_kv_namespace cloudflare_workers_kv_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerskvnamespace"

datacloudflareworkerskvnamespace.NewDataCloudflareWorkersKvNamespace(scope Construct, id *string, config DataCloudflareWorkersKvNamespaceConfig) DataCloudflareWorkersKvNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig">DataCloudflareWorkersKvNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig">DataCloudflareWorkersKvNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.putFilter"></a>

```go
func PutFilter(value DataCloudflareWorkersKvNamespaceFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter">DataCloudflareWorkersKvNamespaceFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.resetNamespaceId"></a>

```go
func ResetNamespaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWorkersKvNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerskvnamespace"

datacloudflareworkerskvnamespace.DataCloudflareWorkersKvNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerskvnamespace"

datacloudflareworkerskvnamespace.DataCloudflareWorkersKvNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerskvnamespace"

datacloudflareworkerskvnamespace.DataCloudflareWorkersKvNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerskvnamespace"

datacloudflareworkerskvnamespace.DataCloudflareWorkersKvNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareWorkersKvNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWorkersKvNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWorkersKvNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_kv_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersKvNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference">DataCloudflareWorkersKvNamespaceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.supportsUrlEncoding">SupportsUrlEncoding</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.filter"></a>

```go
func Filter() DataCloudflareWorkersKvNamespaceFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference">DataCloudflareWorkersKvNamespaceFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SupportsUrlEncoding`<sup>Required</sup> <a name="SupportsUrlEncoding" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.supportsUrlEncoding"></a>

```go
func SupportsUrlEncoding() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersKvNamespaceConfig <a name="DataCloudflareWorkersKvNamespaceConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerskvnamespace"

&datacloudflareworkerskvnamespace.DataCloudflareWorkersKvNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter,
	NamespaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter">DataCloudflareWorkersKvNamespaceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_kv_namespace#filter DataCloudflareWorkersKvNamespace#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | Namespace identifier tag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_kv_namespace#account_id DataCloudflareWorkersKvNamespace#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.filter"></a>

```go
Filter DataCloudflareWorkersKvNamespaceFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter">DataCloudflareWorkersKvNamespaceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_kv_namespace#filter DataCloudflareWorkersKvNamespace#filter}.

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceConfig.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_kv_namespace#namespace_id DataCloudflareWorkersKvNamespace#namespace_id}

---

### DataCloudflareWorkersKvNamespaceFilter <a name="DataCloudflareWorkersKvNamespaceFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerskvnamespace"

&datacloudflareworkerskvnamespace.DataCloudflareWorkersKvNamespaceFilter {
	Direction: *string,
	Order: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter.property.direction">Direction</a></code> | <code>*string</code> | Direction to order namespaces. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter.property.order">Order</a></code> | <code>*string</code> | Field to order results by. Available values: "id", "title". |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order namespaces. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_kv_namespace#direction DataCloudflareWorkersKvNamespace#direction}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order results by. Available values: "id", "title".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_kv_namespace#order DataCloudflareWorkersKvNamespace#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersKvNamespaceFilterOutputReference <a name="DataCloudflareWorkersKvNamespaceFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerskvnamespace"

datacloudflareworkerskvnamespace.NewDataCloudflareWorkersKvNamespaceFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkersKvNamespaceFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkersKvNamespace.DataCloudflareWorkersKvNamespaceFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



