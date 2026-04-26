# `r2DataCatalog` Submodule <a name="`r2DataCatalog` Submodule" id="@cdktn/provider-cloudflare.r2DataCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### R2DataCatalog <a name="R2DataCatalog" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog cloudflare_r2_data_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

r2datacatalog.NewR2DataCatalog(scope Construct, id *string, config R2DataCatalogConfig) R2DataCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig">R2DataCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig">R2DataCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.resetAccountId"></a>

```go
func ResetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a R2DataCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

r2datacatalog.R2DataCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

r2datacatalog.R2DataCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

r2datacatalog.R2DataCatalog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

r2datacatalog.R2DataCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a R2DataCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the R2DataCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing R2DataCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the R2DataCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.credentialStatus">CredentialStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.maintenanceConfig">MaintenanceConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference">R2DataCatalogMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CredentialStatus`<sup>Required</sup> <a name="CredentialStatus" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.credentialStatus"></a>

```go
func CredentialStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceConfig`<sup>Required</sup> <a name="MaintenanceConfig" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.maintenanceConfig"></a>

```go
func MaintenanceConfig() R2DataCatalogMaintenanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference">R2DataCatalogMaintenanceConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### R2DataCatalogConfig <a name="R2DataCatalogConfig" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

&r2datacatalog.R2DataCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Specifies the R2 bucket name. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Use this to identify the account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Specifies the R2 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog#bucket_name R2DataCatalog#bucket_name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Use this to identify the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog#account_id R2DataCatalog#account_id}

---

### R2DataCatalogMaintenanceConfig <a name="R2DataCatalogMaintenanceConfig" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

&r2datacatalog.R2DataCatalogMaintenanceConfig {

}
```


### R2DataCatalogMaintenanceConfigCompaction <a name="R2DataCatalogMaintenanceConfigCompaction" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompaction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

&r2datacatalog.R2DataCatalogMaintenanceConfigCompaction {

}
```


### R2DataCatalogMaintenanceConfigSnapshotExpiration <a name="R2DataCatalogMaintenanceConfigSnapshotExpiration" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpiration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

&r2datacatalog.R2DataCatalogMaintenanceConfigSnapshotExpiration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### R2DataCatalogMaintenanceConfigCompactionOutputReference <a name="R2DataCatalogMaintenanceConfigCompactionOutputReference" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

r2datacatalog.NewR2DataCatalogMaintenanceConfigCompactionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) R2DataCatalogMaintenanceConfigCompactionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.targetSizeMb">TargetSizeMb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompaction">R2DataCatalogMaintenanceConfigCompaction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetSizeMb`<sup>Required</sup> <a name="TargetSizeMb" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.targetSizeMb"></a>

```go
func TargetSizeMb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference.property.internalValue"></a>

```go
func InternalValue() R2DataCatalogMaintenanceConfigCompaction
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompaction">R2DataCatalogMaintenanceConfigCompaction</a>

---


### R2DataCatalogMaintenanceConfigOutputReference <a name="R2DataCatalogMaintenanceConfigOutputReference" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

r2datacatalog.NewR2DataCatalogMaintenanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) R2DataCatalogMaintenanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.compaction">Compaction</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference">R2DataCatalogMaintenanceConfigCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.snapshotExpiration">SnapshotExpiration</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference">R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfig">R2DataCatalogMaintenanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compaction`<sup>Required</sup> <a name="Compaction" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.compaction"></a>

```go
func Compaction() R2DataCatalogMaintenanceConfigCompactionOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigCompactionOutputReference">R2DataCatalogMaintenanceConfigCompactionOutputReference</a>

---

##### `SnapshotExpiration`<sup>Required</sup> <a name="SnapshotExpiration" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.snapshotExpiration"></a>

```go
func SnapshotExpiration() R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference">R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() R2DataCatalogMaintenanceConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfig">R2DataCatalogMaintenanceConfig</a>

---


### R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference <a name="R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2datacatalog"

r2datacatalog.NewR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.maxSnapshotAge">MaxSnapshotAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.minSnapshotsToKeep">MinSnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpiration">R2DataCatalogMaintenanceConfigSnapshotExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSnapshotAge`<sup>Required</sup> <a name="MaxSnapshotAge" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.maxSnapshotAge"></a>

```go
func MaxSnapshotAge() *string
```

- *Type:* *string

---

##### `MinSnapshotsToKeep`<sup>Required</sup> <a name="MinSnapshotsToKeep" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.minSnapshotsToKeep"></a>

```go
func MinSnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.internalValue"></a>

```go
func InternalValue() R2DataCatalogMaintenanceConfigSnapshotExpiration
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2DataCatalog.R2DataCatalogMaintenanceConfigSnapshotExpiration">R2DataCatalogMaintenanceConfigSnapshotExpiration</a>

---



