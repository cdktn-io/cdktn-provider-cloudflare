# `apiShieldSchema` Submodule <a name="`apiShieldSchema` Submodule" id="@cdktn/provider-cloudflare.apiShieldSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldSchema <a name="ApiShieldSchema" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema cloudflare_api_shield_schema}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.NewApiShieldSchema(scope Construct, id *string, config ApiShieldSchemaConfig) ApiShieldSchema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig">ApiShieldSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig">ApiShieldSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetValidationEnabled">ResetValidationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetName"></a>

```go
func ResetName()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetValidationEnabled` <a name="ResetValidationEnabled" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetValidationEnabled"></a>

```go
func ResetValidationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiShieldSchema resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.ApiShieldSchema_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.ApiShieldSchema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.ApiShieldSchema_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.ApiShieldSchema_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiShieldSchema resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiShieldSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiShieldSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiShieldSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference">ApiShieldSchemaSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.uploadDetails">UploadDetails</a></code> | <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference">ApiShieldSchemaUploadDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.validationEnabledInput">ValidationEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.validationEnabled">ValidationEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schema"></a>

```go
func Schema() ApiShieldSchemaSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference">ApiShieldSchemaSchemaOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `UploadDetails`<sup>Required</sup> <a name="UploadDetails" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.uploadDetails"></a>

```go
func UploadDetails() ApiShieldSchemaUploadDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference">ApiShieldSchemaUploadDetailsOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `ValidationEnabledInput`<sup>Optional</sup> <a name="ValidationEnabledInput" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.validationEnabledInput"></a>

```go
func ValidationEnabledInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `ValidationEnabled`<sup>Required</sup> <a name="ValidationEnabled" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.validationEnabled"></a>

```go
func ValidationEnabled() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldSchemaConfig <a name="ApiShieldSchemaConfig" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

&apishieldschema.ApiShieldSchemaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	File: *string,
	Kind: *string,
	ZoneId: *string,
	Name: *string,
	SchemaId: *string,
	ValidationEnabled: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.file">File</a></code> | <code>*string</code> | Schema file bytes. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.kind">Kind</a></code> | <code>*string</code> | Kind of schema Available values: "openapi_v3". |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.name">Name</a></code> | <code>*string</code> | Name of the schema. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema#schema_id ApiShieldSchema#schema_id}. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.validationEnabled">ValidationEnabled</a></code> | <code>*string</code> | Flag whether schema is enabled for validation. Available values: "true", "false". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.file"></a>

```go
File *string
```

- *Type:* *string

Schema file bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema#file ApiShieldSchema#file}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Kind of schema Available values: "openapi_v3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema#kind ApiShieldSchema#kind}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema#zone_id ApiShieldSchema#zone_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema#name ApiShieldSchema#name}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema#schema_id ApiShieldSchema#schema_id}.

---

##### `ValidationEnabled`<sup>Optional</sup> <a name="ValidationEnabled" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.validationEnabled"></a>

```go
ValidationEnabled *string
```

- *Type:* *string

Flag whether schema is enabled for validation. Available values: "true", "false".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/api_shield_schema#validation_enabled ApiShieldSchema#validation_enabled}

---

### ApiShieldSchemaSchema <a name="ApiShieldSchemaSchema" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

&apishieldschema.ApiShieldSchemaSchema {

}
```


### ApiShieldSchemaUploadDetails <a name="ApiShieldSchemaUploadDetails" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

&apishieldschema.ApiShieldSchemaUploadDetails {

}
```


### ApiShieldSchemaUploadDetailsWarnings <a name="ApiShieldSchemaUploadDetailsWarnings" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

&apishieldschema.ApiShieldSchemaUploadDetailsWarnings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ApiShieldSchemaSchemaOutputReference <a name="ApiShieldSchemaSchemaOutputReference" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.NewApiShieldSchemaSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldSchemaSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.validationEnabled">ValidationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchema">ApiShieldSchemaSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `ValidationEnabled`<sup>Required</sup> <a name="ValidationEnabled" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.validationEnabled"></a>

```go
func ValidationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldSchemaSchema
```

- *Type:* <a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchema">ApiShieldSchemaSchema</a>

---


### ApiShieldSchemaUploadDetailsOutputReference <a name="ApiShieldSchemaUploadDetailsOutputReference" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.NewApiShieldSchemaUploadDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldSchemaUploadDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.warnings">Warnings</a></code> | <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList">ApiShieldSchemaUploadDetailsWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetails">ApiShieldSchemaUploadDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Warnings`<sup>Required</sup> <a name="Warnings" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.warnings"></a>

```go
func Warnings() ApiShieldSchemaUploadDetailsWarningsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList">ApiShieldSchemaUploadDetailsWarningsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldSchemaUploadDetails
```

- *Type:* <a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetails">ApiShieldSchemaUploadDetails</a>

---


### ApiShieldSchemaUploadDetailsWarningsList <a name="ApiShieldSchemaUploadDetailsWarningsList" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.NewApiShieldSchemaUploadDetailsWarningsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiShieldSchemaUploadDetailsWarningsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.get"></a>

```go
func Get(index *f64) ApiShieldSchemaUploadDetailsWarningsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiShieldSchemaUploadDetailsWarningsOutputReference <a name="ApiShieldSchemaUploadDetailsWarningsOutputReference" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/apishieldschema"

apishieldschema.NewApiShieldSchemaUploadDetailsWarningsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiShieldSchemaUploadDetailsWarningsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings">ApiShieldSchemaUploadDetailsWarnings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldSchemaUploadDetailsWarnings
```

- *Type:* <a href="#@cdktn/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings">ApiShieldSchemaUploadDetailsWarnings</a>

---



