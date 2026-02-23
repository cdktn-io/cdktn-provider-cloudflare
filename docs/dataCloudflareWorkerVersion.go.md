# `dataCloudflareWorkerVersion` Submodule <a name="`dataCloudflareWorkerVersion` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkerVersion <a name="DataCloudflareWorkerVersion" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version cloudflare_worker_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersion(scope Construct, id *string, config DataCloudflareWorkerVersionConfig) DataCloudflareWorkerVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig">DataCloudflareWorkerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig">DataCloudflareWorkerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.resetInclude"></a>

```go
func ResetInclude()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWorkerVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.DataCloudflareWorkerVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.DataCloudflareWorkerVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.DataCloudflareWorkerVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.DataCloudflareWorkerVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareWorkerVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWorkerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWorkerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.annotations">Annotations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference">DataCloudflareWorkerVersionAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.assets">Assets</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference">DataCloudflareWorkerVersionAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.bindings">Bindings</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList">DataCloudflareWorkerVersionBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference">DataCloudflareWorkerVersionLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.mainModule">MainModule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.mainScriptBase64">MainScriptBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.migrations">Migrations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference">DataCloudflareWorkerVersionMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.modules">Modules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList">DataCloudflareWorkerVersionModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference">DataCloudflareWorkerVersionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.startupTimeMs">StartupTimeMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.usageModel">UsageModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.includeInput">IncludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.workerIdInput">WorkerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.include">Include</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.workerId">WorkerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.annotations"></a>

```go
func Annotations() DataCloudflareWorkerVersionAnnotationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference">DataCloudflareWorkerVersionAnnotationsOutputReference</a>

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.assets"></a>

```go
func Assets() DataCloudflareWorkerVersionAssetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference">DataCloudflareWorkerVersionAssetsOutputReference</a>

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.bindings"></a>

```go
func Bindings() DataCloudflareWorkerVersionBindingsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList">DataCloudflareWorkerVersionBindingsList</a>

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.compatibilityDate"></a>

```go
func CompatibilityDate() *string
```

- *Type:* *string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.compatibilityFlags"></a>

```go
func CompatibilityFlags() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.limits"></a>

```go
func Limits() DataCloudflareWorkerVersionLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference">DataCloudflareWorkerVersionLimitsOutputReference</a>

---

##### `MainModule`<sup>Required</sup> <a name="MainModule" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.mainModule"></a>

```go
func MainModule() *string
```

- *Type:* *string

---

##### `MainScriptBase64`<sup>Required</sup> <a name="MainScriptBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.mainScriptBase64"></a>

```go
func MainScriptBase64() *string
```

- *Type:* *string

---

##### `Migrations`<sup>Required</sup> <a name="Migrations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.migrations"></a>

```go
func Migrations() DataCloudflareWorkerVersionMigrationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference">DataCloudflareWorkerVersionMigrationsOutputReference</a>

---

##### `Modules`<sup>Required</sup> <a name="Modules" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.modules"></a>

```go
func Modules() DataCloudflareWorkerVersionModulesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList">DataCloudflareWorkerVersionModulesList</a>

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.placement"></a>

```go
func Placement() DataCloudflareWorkerVersionPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference">DataCloudflareWorkerVersionPlacementOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `StartupTimeMs`<sup>Required</sup> <a name="StartupTimeMs" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.startupTimeMs"></a>

```go
func StartupTimeMs() *f64
```

- *Type:* *f64

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.usageModel"></a>

```go
func UsageModel() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.includeInput"></a>

```go
func IncludeInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `WorkerIdInput`<sup>Optional</sup> <a name="WorkerIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.workerIdInput"></a>

```go
func WorkerIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.include"></a>

```go
func Include() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.workerId"></a>

```go
func WorkerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkerVersionAnnotations <a name="DataCloudflareWorkerVersionAnnotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionAnnotations {

}
```


### DataCloudflareWorkerVersionAssets <a name="DataCloudflareWorkerVersionAssets" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionAssets {

}
```


### DataCloudflareWorkerVersionAssetsConfig <a name="DataCloudflareWorkerVersionAssetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionAssetsConfig {

}
```


### DataCloudflareWorkerVersionBindings <a name="DataCloudflareWorkerVersionBindings" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionBindings {

}
```


### DataCloudflareWorkerVersionBindingsOutbound <a name="DataCloudflareWorkerVersionBindingsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionBindingsOutbound {

}
```


### DataCloudflareWorkerVersionBindingsOutboundWorker <a name="DataCloudflareWorkerVersionBindingsOutboundWorker" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionBindingsOutboundWorker {

}
```


### DataCloudflareWorkerVersionBindingsSimple <a name="DataCloudflareWorkerVersionBindingsSimple" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionBindingsSimple {

}
```


### DataCloudflareWorkerVersionConfig <a name="DataCloudflareWorkerVersionConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	VersionId: *string,
	WorkerId: *string,
	Include: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.versionId">VersionId</a></code> | <code>*string</code> | Identifier for the version, which can be ID or the literal "latest" to operate on the most recently created version. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.workerId">WorkerId</a></code> | <code>*string</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.include">Include</a></code> | <code>*string</code> | Whether to include the `modules` property of the version in the response, which contains code and sourcemap content and may add several megabytes to the response size. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#account_id DataCloudflareWorkerVersion#account_id}

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Identifier for the version, which can be ID or the literal "latest" to operate on the most recently created version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#version_id DataCloudflareWorkerVersion#version_id}

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.workerId"></a>

```go
WorkerId *string
```

- *Type:* *string

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#worker_id DataCloudflareWorkerVersion#worker_id}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.include"></a>

```go
Include *string
```

- *Type:* *string

Whether to include the `modules` property of the version in the response, which contains code and sourcemap content and may add several megabytes to the response size.

Available values: "modules".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#include DataCloudflareWorkerVersion#include}

---

### DataCloudflareWorkerVersionLimits <a name="DataCloudflareWorkerVersionLimits" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionLimits {

}
```


### DataCloudflareWorkerVersionMigrations <a name="DataCloudflareWorkerVersionMigrations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionMigrations {

}
```


### DataCloudflareWorkerVersionMigrationsRenamedClasses <a name="DataCloudflareWorkerVersionMigrationsRenamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionMigrationsRenamedClasses {

}
```


### DataCloudflareWorkerVersionMigrationsSteps <a name="DataCloudflareWorkerVersionMigrationsSteps" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionMigrationsSteps {

}
```


### DataCloudflareWorkerVersionMigrationsStepsRenamedClasses <a name="DataCloudflareWorkerVersionMigrationsStepsRenamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses {

}
```


### DataCloudflareWorkerVersionMigrationsStepsTransferredClasses <a name="DataCloudflareWorkerVersionMigrationsStepsTransferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses {

}
```


### DataCloudflareWorkerVersionMigrationsTransferredClasses <a name="DataCloudflareWorkerVersionMigrationsTransferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionMigrationsTransferredClasses {

}
```


### DataCloudflareWorkerVersionModules <a name="DataCloudflareWorkerVersionModules" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionModules {

}
```


### DataCloudflareWorkerVersionPlacement <a name="DataCloudflareWorkerVersionPlacement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionPlacement {

}
```


### DataCloudflareWorkerVersionPlacementTarget <a name="DataCloudflareWorkerVersionPlacementTarget" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

&datacloudflareworkerversion.DataCloudflareWorkerVersionPlacementTarget {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkerVersionAnnotationsOutputReference <a name="DataCloudflareWorkerVersionAnnotationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionAnnotationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionAnnotationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersMessage">WorkersMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersTag">WorkersTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersTriggeredBy">WorkersTriggeredBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations">DataCloudflareWorkerVersionAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkersMessage`<sup>Required</sup> <a name="WorkersMessage" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersMessage"></a>

```go
func WorkersMessage() *string
```

- *Type:* *string

---

##### `WorkersTag`<sup>Required</sup> <a name="WorkersTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersTag"></a>

```go
func WorkersTag() *string
```

- *Type:* *string

---

##### `WorkersTriggeredBy`<sup>Required</sup> <a name="WorkersTriggeredBy" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersTriggeredBy"></a>

```go
func WorkersTriggeredBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionAnnotations
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations">DataCloudflareWorkerVersionAnnotations</a>

---


### DataCloudflareWorkerVersionAssetsConfigOutputReference <a name="DataCloudflareWorkerVersionAssetsConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionAssetsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionAssetsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.htmlHandling">HtmlHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.notFoundHandling">NotFoundHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig">DataCloudflareWorkerVersionAssetsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HtmlHandling`<sup>Required</sup> <a name="HtmlHandling" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.htmlHandling"></a>

```go
func HtmlHandling() *string
```

- *Type:* *string

---

##### `NotFoundHandling`<sup>Required</sup> <a name="NotFoundHandling" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.notFoundHandling"></a>

```go
func NotFoundHandling() *string
```

- *Type:* *string

---

##### `RunWorkerFirst`<sup>Required</sup> <a name="RunWorkerFirst" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.runWorkerFirst"></a>

```go
func RunWorkerFirst() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionAssetsConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig">DataCloudflareWorkerVersionAssetsConfig</a>

---


### DataCloudflareWorkerVersionAssetsOutputReference <a name="DataCloudflareWorkerVersionAssetsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionAssetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionAssetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference">DataCloudflareWorkerVersionAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.jwt">Jwt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets">DataCloudflareWorkerVersionAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.config"></a>

```go
func Config() DataCloudflareWorkerVersionAssetsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference">DataCloudflareWorkerVersionAssetsConfigOutputReference</a>

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.jwt"></a>

```go
func Jwt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionAssets
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets">DataCloudflareWorkerVersionAssets</a>

---


### DataCloudflareWorkerVersionBindingsList <a name="DataCloudflareWorkerVersionBindingsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionBindingsOutboundOutputReference <a name="DataCloudflareWorkerVersionBindingsOutboundOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionBindingsOutboundOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionBindingsOutboundOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.params">Params</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound">DataCloudflareWorkerVersionBindingsOutbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.params"></a>

```go
func Params() *[]*string
```

- *Type:* *[]*string

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.worker"></a>

```go
func Worker() DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionBindingsOutbound
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound">DataCloudflareWorkerVersionBindingsOutbound</a>

---


### DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference <a name="DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker">DataCloudflareWorkerVersionBindingsOutboundWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionBindingsOutboundWorker
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker">DataCloudflareWorkerVersionBindingsOutboundWorker</a>

---


### DataCloudflareWorkerVersionBindingsOutputReference <a name="DataCloudflareWorkerVersionBindingsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.allowedDestinationAddresses">AllowedDestinationAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.allowedSenderAddresses">AllowedSenderAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.className">ClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.jurisdiction">Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.keyBase64">KeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.keyJwk">KeyJwk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.oldName">OldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.outbound">Outbound</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference">DataCloudflareWorkerVersionBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.part">Part</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.pipeline">Pipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.scriptName">ScriptName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.simple">Simple</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference">DataCloudflareWorkerVersionBindingsSimpleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.storeId">StoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.usages">Usages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings">DataCloudflareWorkerVersionBindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `AllowedDestinationAddresses`<sup>Required</sup> <a name="AllowedDestinationAddresses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.allowedDestinationAddresses"></a>

```go
func AllowedDestinationAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedSenderAddresses`<sup>Required</sup> <a name="AllowedSenderAddresses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.allowedSenderAddresses"></a>

```go
func AllowedSenderAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.className"></a>

```go
func ClassName() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.jurisdiction"></a>

```go
func Jurisdiction() *string
```

- *Type:* *string

---

##### `KeyBase64`<sup>Required</sup> <a name="KeyBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.keyBase64"></a>

```go
func KeyBase64() *string
```

- *Type:* *string

---

##### `KeyJwk`<sup>Required</sup> <a name="KeyJwk" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.keyJwk"></a>

```go
func KeyJwk() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `OldName`<sup>Required</sup> <a name="OldName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.oldName"></a>

```go
func OldName() *string
```

- *Type:* *string

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.outbound"></a>

```go
func Outbound() DataCloudflareWorkerVersionBindingsOutboundOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference">DataCloudflareWorkerVersionBindingsOutboundOutputReference</a>

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.part"></a>

```go
func Part() *string
```

- *Type:* *string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.pipeline"></a>

```go
func Pipeline() *string
```

- *Type:* *string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.scriptName"></a>

```go
func ScriptName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Simple`<sup>Required</sup> <a name="Simple" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.simple"></a>

```go
func Simple() DataCloudflareWorkerVersionBindingsSimpleOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference">DataCloudflareWorkerVersionBindingsSimpleOutputReference</a>

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.storeId"></a>

```go
func StoreId() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.usages"></a>

```go
func Usages() *[]*string
```

- *Type:* *[]*string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionBindings
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings">DataCloudflareWorkerVersionBindings</a>

---


### DataCloudflareWorkerVersionBindingsSimpleOutputReference <a name="DataCloudflareWorkerVersionBindingsSimpleOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionBindingsSimpleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionBindingsSimpleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple">DataCloudflareWorkerVersionBindingsSimple</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionBindingsSimple
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple">DataCloudflareWorkerVersionBindingsSimple</a>

---


### DataCloudflareWorkerVersionLimitsOutputReference <a name="DataCloudflareWorkerVersionLimitsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.cpuMs">CpuMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits">DataCloudflareWorkerVersionLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.cpuMs"></a>

```go
func CpuMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionLimits
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits">DataCloudflareWorkerVersionLimits</a>

---


### DataCloudflareWorkerVersionMigrationsOutputReference <a name="DataCloudflareWorkerVersionMigrationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionMigrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newTag">NewTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.oldTag">OldTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList">DataCloudflareWorkerVersionMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList">DataCloudflareWorkerVersionMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList">DataCloudflareWorkerVersionMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations">DataCloudflareWorkerVersionMigrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.deletedClasses"></a>

```go
func DeletedClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newClasses"></a>

```go
func NewClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newSqliteClasses"></a>

```go
func NewSqliteClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewTag`<sup>Required</sup> <a name="NewTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newTag"></a>

```go
func NewTag() *string
```

- *Type:* *string

---

##### `OldTag`<sup>Required</sup> <a name="OldTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.oldTag"></a>

```go
func OldTag() *string
```

- *Type:* *string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.renamedClasses"></a>

```go
func RenamedClasses() DataCloudflareWorkerVersionMigrationsRenamedClassesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList">DataCloudflareWorkerVersionMigrationsRenamedClassesList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.steps"></a>

```go
func Steps() DataCloudflareWorkerVersionMigrationsStepsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList">DataCloudflareWorkerVersionMigrationsStepsList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.transferredClasses"></a>

```go
func TransferredClasses() DataCloudflareWorkerVersionMigrationsTransferredClassesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList">DataCloudflareWorkerVersionMigrationsTransferredClassesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionMigrations
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations">DataCloudflareWorkerVersionMigrations</a>

---


### DataCloudflareWorkerVersionMigrationsRenamedClassesList <a name="DataCloudflareWorkerVersionMigrationsRenamedClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsRenamedClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionMigrationsRenamedClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses">DataCloudflareWorkerVersionMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionMigrationsRenamedClasses
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses">DataCloudflareWorkerVersionMigrationsRenamedClasses</a>

---


### DataCloudflareWorkerVersionMigrationsStepsList <a name="DataCloudflareWorkerVersionMigrationsStepsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionMigrationsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionMigrationsStepsOutputReference <a name="DataCloudflareWorkerVersionMigrationsStepsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionMigrationsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps">DataCloudflareWorkerVersionMigrationsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.deletedClasses"></a>

```go
func DeletedClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.newClasses"></a>

```go
func NewClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```go
func NewSqliteClasses() *[]*string
```

- *Type:* *[]*string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.renamedClasses"></a>

```go
func RenamedClasses() DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.transferredClasses"></a>

```go
func TransferredClasses() DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionMigrationsSteps
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps">DataCloudflareWorkerVersionMigrationsSteps</a>

---


### DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList <a name="DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsStepsRenamedClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionMigrationsStepsRenamedClasses
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionMigrationsStepsRenamedClasses</a>

---


### DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList <a name="DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsStepsTransferredClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```go
func FromScript() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionMigrationsStepsTransferredClasses
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionMigrationsStepsTransferredClasses</a>

---


### DataCloudflareWorkerVersionMigrationsTransferredClassesList <a name="DataCloudflareWorkerVersionMigrationsTransferredClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsTransferredClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionMigrationsTransferredClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses">DataCloudflareWorkerVersionMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```go
func FromScript() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionMigrationsTransferredClasses
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses">DataCloudflareWorkerVersionMigrationsTransferredClasses</a>

---


### DataCloudflareWorkerVersionModulesList <a name="DataCloudflareWorkerVersionModulesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionModulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionModulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionModulesOutputReference <a name="DataCloudflareWorkerVersionModulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionModulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionModulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules">DataCloudflareWorkerVersionModules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.contentBase64"></a>

```go
func ContentBase64() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionModules
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules">DataCloudflareWorkerVersionModules</a>

---


### DataCloudflareWorkerVersionPlacementOutputReference <a name="DataCloudflareWorkerVersionPlacementOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList">DataCloudflareWorkerVersionPlacementTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement">DataCloudflareWorkerVersionPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.target"></a>

```go
func Target() DataCloudflareWorkerVersionPlacementTargetList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList">DataCloudflareWorkerVersionPlacementTargetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionPlacement
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement">DataCloudflareWorkerVersionPlacement</a>

---


### DataCloudflareWorkerVersionPlacementTargetList <a name="DataCloudflareWorkerVersionPlacementTargetList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionPlacementTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionPlacementTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionPlacementTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionPlacementTargetOutputReference <a name="DataCloudflareWorkerVersionPlacementTargetOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerversion"

datacloudflareworkerversion.NewDataCloudflareWorkerVersionPlacementTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionPlacementTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget">DataCloudflareWorkerVersionPlacementTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionPlacementTarget
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget">DataCloudflareWorkerVersionPlacementTarget</a>

---



