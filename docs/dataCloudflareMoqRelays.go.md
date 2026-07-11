# `dataCloudflareMoqRelays` Submodule <a name="`dataCloudflareMoqRelays` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMoqRelays <a name="DataCloudflareMoqRelays" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays cloudflare_moq_relays}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

datacloudflaremoqrelays.NewDataCloudflareMoqRelays(scope Construct, id *string, config DataCloudflareMoqRelaysConfig) DataCloudflareMoqRelays
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig">DataCloudflareMoqRelaysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig">DataCloudflareMoqRelaysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetAsc">ResetAsc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetPerPage">ResetPerPage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAsc` <a name="ResetAsc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetAsc"></a>

```go
func ResetAsc()
```

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetCreatedAfter"></a>

```go
func ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetCreatedBefore"></a>

```go
func ResetCreatedBefore()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetPerPage` <a name="ResetPerPage" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetPerPage"></a>

```go
func ResetPerPage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMoqRelays resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

datacloudflaremoqrelays.DataCloudflareMoqRelays_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

datacloudflaremoqrelays.DataCloudflareMoqRelays_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

datacloudflaremoqrelays.DataCloudflareMoqRelays_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

datacloudflaremoqrelays.DataCloudflareMoqRelays_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareMoqRelays resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareMoqRelays to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareMoqRelays that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMoqRelays to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList">DataCloudflareMoqRelaysResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.ascInput">AscInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdAfterInput">CreatedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.perPageInput">PerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.asc">Asc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.perPage">PerPage</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.result"></a>

```go
func Result() DataCloudflareMoqRelaysResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList">DataCloudflareMoqRelaysResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AscInput`<sup>Optional</sup> <a name="AscInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.ascInput"></a>

```go
func AscInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdAfterInput"></a>

```go
func CreatedAfterInput() *string
```

- *Type:* *string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdBeforeInput"></a>

```go
func CreatedBeforeInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.perPageInput"></a>

```go
func PerPageInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Asc`<sup>Required</sup> <a name="Asc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.asc"></a>

```go
func Asc() interface{}
```

- *Type:* interface{}

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdAfter"></a>

```go
func CreatedAfter() *string
```

- *Type:* *string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdBefore"></a>

```go
func CreatedBefore() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.perPage"></a>

```go
func PerPage() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMoqRelaysConfig <a name="DataCloudflareMoqRelaysConfig" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

&datacloudflaremoqrelays.DataCloudflareMoqRelaysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Asc: interface{},
	CreatedAfter: *string,
	CreatedBefore: *string,
	MaxItems: *f64,
	PerPage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.asc">Asc</a></code> | <code>interface{}</code> | Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | Cursor for pagination. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | Cursor for pagination. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.perPage">PerPage</a></code> | <code>*f64</code> | Maximum number of relays to return per page. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#account_id DataCloudflareMoqRelays#account_id}

---

##### `Asc`<sup>Optional</sup> <a name="Asc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.asc"></a>

```go
Asc interface{}
```

- *Type:* interface{}

Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#asc DataCloudflareMoqRelays#asc}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.createdAfter"></a>

```go
CreatedAfter *string
```

- *Type:* *string

Cursor for pagination.

Returns relays created strictly after this
RFC 3339 timestamp (typically the `created` value of the last item
on the current page, to fetch the next page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#created_after DataCloudflareMoqRelays#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.createdBefore"></a>

```go
CreatedBefore *string
```

- *Type:* *string

Cursor for pagination.

Returns relays created strictly before this
RFC 3339 timestamp (typically the `created` value of the first item
on the current page, to fetch the previous page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#created_before DataCloudflareMoqRelays#created_before}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#max_items DataCloudflareMoqRelays#max_items}

---

##### `PerPage`<sup>Optional</sup> <a name="PerPage" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.perPage"></a>

```go
PerPage *f64
```

- *Type:* *f64

Maximum number of relays to return per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#per_page DataCloudflareMoqRelays#per_page}

---

### DataCloudflareMoqRelaysResult <a name="DataCloudflareMoqRelaysResult" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

&datacloudflaremoqrelays.DataCloudflareMoqRelaysResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMoqRelaysResultList <a name="DataCloudflareMoqRelaysResultList" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

datacloudflaremoqrelays.NewDataCloudflareMoqRelaysResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareMoqRelaysResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.get"></a>

```go
func Get(index *f64) DataCloudflareMoqRelaysResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareMoqRelaysResultOutputReference <a name="DataCloudflareMoqRelaysResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremoqrelays"

datacloudflaremoqrelays.NewDataCloudflareMoqRelaysResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareMoqRelaysResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult">DataCloudflareMoqRelaysResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareMoqRelaysResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult">DataCloudflareMoqRelaysResult</a>

---



