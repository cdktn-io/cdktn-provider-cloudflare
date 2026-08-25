# `aiSearchNamespace` Submodule <a name="`aiSearchNamespace` Submodule" id="@cdktn/provider-cloudflare.aiSearchNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchNamespace <a name="AiSearchNamespace" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace cloudflare_ai_search_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.NewAiSearchNamespace(scope Construct, id *string, config AiSearchNamespaceConfig) AiSearchNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig">AiSearchNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig">AiSearchNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams">PutPublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetPublicEndpointParams">ResetPublicEndpointParams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPublicEndpointParams` <a name="PutPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams"></a>

```go
func PutPublicEndpointParams(value AiSearchNamespacePublicEndpointParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetPublicEndpointParams` <a name="ResetPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetPublicEndpointParams"></a>

```go
func ResetPublicEndpointParams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiSearchNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.AiSearchNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.AiSearchNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.AiSearchNamespace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.AiSearchNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AiSearchNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiSearchNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiSearchNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointId">PublicEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference">AiSearchNamespacePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointParamsInput">PublicEndpointParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `PublicEndpointId`<sup>Required</sup> <a name="PublicEndpointId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointId"></a>

```go
func PublicEndpointId() *string
```

- *Type:* *string

---

##### `PublicEndpointParams`<sup>Required</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointParams"></a>

```go
func PublicEndpointParams() AiSearchNamespacePublicEndpointParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference">AiSearchNamespacePublicEndpointParamsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicEndpointParamsInput`<sup>Optional</sup> <a name="PublicEndpointParamsInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointParamsInput"></a>

```go
func PublicEndpointParamsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchNamespaceConfig <a name="AiSearchNamespaceConfig" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

&aisearchnamespace.AiSearchNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Description: *string,
	PublicEndpointParams: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.aiSearchNamespace.AiSearchNamespacePublicEndpointParams,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#account_id AiSearchNamespace#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#name AiSearchNamespace#name}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.description">Description</a></code> | <code>*string</code> | Optional description for the namespace. Max 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#public_endpoint_params AiSearchNamespace#public_endpoint_params}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#account_id AiSearchNamespace#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#name AiSearchNamespace#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description for the namespace. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}

---

##### `PublicEndpointParams`<sup>Optional</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.publicEndpointParams"></a>

```go
PublicEndpointParams AiSearchNamespacePublicEndpointParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#public_endpoint_params AiSearchNamespace#public_endpoint_params}.

---

### AiSearchNamespacePublicEndpointParams <a name="AiSearchNamespacePublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

&aisearchnamespace.AiSearchNamespacePublicEndpointParams {
	AuthorizedHosts: *[]*string,
	ChatCompletionsEndpoint: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint,
	CustomDomains: *[]*string,
	DefaultDomainEnabled: interface{},
	Enabled: interface{},
	InstancesAllowed: *[]*string,
	Mcp: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp,
	RateLimit: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit,
	SearchEndpoint: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.authorizedHosts">AuthorizedHosts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#authorized_hosts AiSearchNamespace#authorized_hosts}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#chat_completions_endpoint AiSearchNamespace#chat_completions_endpoint}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.customDomains">CustomDomains</a></code> | <code>*[]*string</code> | Custom domain hostnames that alias this public endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.defaultDomainEnabled">DefaultDomainEnabled</a></code> | <code>interface{}</code> | When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#enabled AiSearchNamespace#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.instancesAllowed">InstancesAllowed</a></code> | <code>*[]*string</code> | Instance IDs exposed through the namespace public endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#mcp AiSearchNamespace#mcp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#rate_limit AiSearchNamespace#rate_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#search_endpoint AiSearchNamespace#search_endpoint}. |

---

##### `AuthorizedHosts`<sup>Optional</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.authorizedHosts"></a>

```go
AuthorizedHosts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#authorized_hosts AiSearchNamespace#authorized_hosts}.

---

##### `ChatCompletionsEndpoint`<sup>Optional</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.chatCompletionsEndpoint"></a>

```go
ChatCompletionsEndpoint AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#chat_completions_endpoint AiSearchNamespace#chat_completions_endpoint}.

---

##### `CustomDomains`<sup>Optional</sup> <a name="CustomDomains" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.customDomains"></a>

```go
CustomDomains *[]*string
```

- *Type:* *[]*string

Custom domain hostnames that alias this public endpoint.

GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#custom_domains AiSearchNamespace#custom_domains}

---

##### `DefaultDomainEnabled`<sup>Optional</sup> <a name="DefaultDomainEnabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.defaultDomainEnabled"></a>

```go
DefaultDomainEnabled interface{}
```

- *Type:* interface{}

When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#default_domain_enabled AiSearchNamespace#default_domain_enabled}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#enabled AiSearchNamespace#enabled}.

---

##### `InstancesAllowed`<sup>Optional</sup> <a name="InstancesAllowed" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.instancesAllowed"></a>

```go
InstancesAllowed *[]*string
```

- *Type:* *[]*string

Instance IDs exposed through the namespace public endpoint.

Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#instances_allowed AiSearchNamespace#instances_allowed}

---

##### `Mcp`<sup>Optional</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.mcp"></a>

```go
Mcp AiSearchNamespacePublicEndpointParamsMcp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#mcp AiSearchNamespace#mcp}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.rateLimit"></a>

```go
RateLimit AiSearchNamespacePublicEndpointParamsRateLimit
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#rate_limit AiSearchNamespace#rate_limit}.

---

##### `SearchEndpoint`<sup>Optional</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.searchEndpoint"></a>

```go
SearchEndpoint AiSearchNamespacePublicEndpointParamsSearchEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#search_endpoint AiSearchNamespace#search_endpoint}.

---

### AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint <a name="AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

&aisearchnamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint {
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint.property.disabled">Disabled</a></code> | <code>interface{}</code> | Disable chat completions endpoint for this public endpoint. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

### AiSearchNamespacePublicEndpointParamsMcp <a name="AiSearchNamespacePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

&aisearchnamespace.AiSearchNamespacePublicEndpointParamsMcp {
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.property.disabled">Disabled</a></code> | <code>interface{}</code> | Disable MCP endpoint for this public endpoint. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

### AiSearchNamespacePublicEndpointParamsRateLimit <a name="AiSearchNamespacePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

&aisearchnamespace.AiSearchNamespacePublicEndpointParamsRateLimit {
	PeriodMs: *f64,
	Requests: *f64,
	Technique: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.periodMs">PeriodMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#period_ms AiSearchNamespace#period_ms}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.requests">Requests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#requests AiSearchNamespace#requests}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.technique">Technique</a></code> | <code>*string</code> | Available values: "fixed", "sliding". |

---

##### `PeriodMs`<sup>Optional</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.periodMs"></a>

```go
PeriodMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#period_ms AiSearchNamespace#period_ms}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.requests"></a>

```go
Requests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#requests AiSearchNamespace#requests}.

---

##### `Technique`<sup>Optional</sup> <a name="Technique" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.technique"></a>

```go
Technique *string
```

- *Type:* *string

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#technique AiSearchNamespace#technique}

---

### AiSearchNamespacePublicEndpointParamsSearchEndpoint <a name="AiSearchNamespacePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

&aisearchnamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint {
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint.property.disabled">Disabled</a></code> | <code>interface{}</code> | Disable search endpoint for this public endpoint. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.NewAiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchNamespacePublicEndpointParamsMcpOutputReference <a name="AiSearchNamespacePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.NewAiSearchNamespacePublicEndpointParamsMcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchNamespacePublicEndpointParamsMcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchNamespacePublicEndpointParamsOutputReference <a name="AiSearchNamespacePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.NewAiSearchNamespacePublicEndpointParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchNamespacePublicEndpointParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putChatCompletionsEndpoint">PutChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putMcp">PutMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putRateLimit">PutRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putSearchEndpoint">PutSearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetAuthorizedHosts">ResetAuthorizedHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint">ResetChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetCustomDomains">ResetCustomDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetDefaultDomainEnabled">ResetDefaultDomainEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetInstancesAllowed">ResetInstancesAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetMcp">ResetMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetSearchEndpoint">ResetSearchEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChatCompletionsEndpoint` <a name="PutChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putChatCompletionsEndpoint"></a>

```go
func PutChatCompletionsEndpoint(value AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putChatCompletionsEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `PutMcp` <a name="PutMcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putMcp"></a>

```go
func PutMcp(value AiSearchNamespacePublicEndpointParamsMcp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a>

---

##### `PutRateLimit` <a name="PutRateLimit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putRateLimit"></a>

```go
func PutRateLimit(value AiSearchNamespacePublicEndpointParamsRateLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a>

---

##### `PutSearchEndpoint` <a name="PutSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putSearchEndpoint"></a>

```go
func PutSearchEndpoint(value AiSearchNamespacePublicEndpointParamsSearchEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putSearchEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a>

---

##### `ResetAuthorizedHosts` <a name="ResetAuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetAuthorizedHosts"></a>

```go
func ResetAuthorizedHosts()
```

##### `ResetChatCompletionsEndpoint` <a name="ResetChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint"></a>

```go
func ResetChatCompletionsEndpoint()
```

##### `ResetCustomDomains` <a name="ResetCustomDomains" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetCustomDomains"></a>

```go
func ResetCustomDomains()
```

##### `ResetDefaultDomainEnabled` <a name="ResetDefaultDomainEnabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetDefaultDomainEnabled"></a>

```go
func ResetDefaultDomainEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetInstancesAllowed` <a name="ResetInstancesAllowed" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetInstancesAllowed"></a>

```go
func ResetInstancesAllowed()
```

##### `ResetMcp` <a name="ResetMcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetMcp"></a>

```go
func ResetMcp()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetRateLimit"></a>

```go
func ResetRateLimit()
```

##### `ResetSearchEndpoint` <a name="ResetSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetSearchEndpoint"></a>

```go
func ResetSearchEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference">AiSearchNamespacePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference">AiSearchNamespacePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference">AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.authorizedHostsInput">AuthorizedHostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput">ChatCompletionsEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.customDomainsInput">CustomDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.defaultDomainEnabledInput">DefaultDomainEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.instancesAllowedInput">InstancesAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.mcpInput">McpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.searchEndpointInput">SearchEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.authorizedHosts">AuthorizedHosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.customDomains">CustomDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.defaultDomainEnabled">DefaultDomainEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.instancesAllowed">InstancesAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChatCompletionsEndpoint`<sup>Required</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```go
func ChatCompletionsEndpoint() AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `Mcp`<sup>Required</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.mcp"></a>

```go
func Mcp() AiSearchNamespacePublicEndpointParamsMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference">AiSearchNamespacePublicEndpointParamsMcpOutputReference</a>

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.rateLimit"></a>

```go
func RateLimit() AiSearchNamespacePublicEndpointParamsRateLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference">AiSearchNamespacePublicEndpointParamsRateLimitOutputReference</a>

---

##### `SearchEndpoint`<sup>Required</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```go
func SearchEndpoint() AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference">AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `AuthorizedHostsInput`<sup>Optional</sup> <a name="AuthorizedHostsInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.authorizedHostsInput"></a>

```go
func AuthorizedHostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChatCompletionsEndpointInput`<sup>Optional</sup> <a name="ChatCompletionsEndpointInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput"></a>

```go
func ChatCompletionsEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `CustomDomainsInput`<sup>Optional</sup> <a name="CustomDomainsInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.customDomainsInput"></a>

```go
func CustomDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultDomainEnabledInput`<sup>Optional</sup> <a name="DefaultDomainEnabledInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.defaultDomainEnabledInput"></a>

```go
func DefaultDomainEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InstancesAllowedInput`<sup>Optional</sup> <a name="InstancesAllowedInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.instancesAllowedInput"></a>

```go
func InstancesAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `McpInput`<sup>Optional</sup> <a name="McpInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.mcpInput"></a>

```go
func McpInput() interface{}
```

- *Type:* interface{}

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.rateLimitInput"></a>

```go
func RateLimitInput() interface{}
```

- *Type:* interface{}

---

##### `SearchEndpointInput`<sup>Optional</sup> <a name="SearchEndpointInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.searchEndpointInput"></a>

```go
func SearchEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizedHosts`<sup>Required</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```go
func AuthorizedHosts() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDomains`<sup>Required</sup> <a name="CustomDomains" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.customDomains"></a>

```go
func CustomDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultDomainEnabled`<sup>Required</sup> <a name="DefaultDomainEnabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.defaultDomainEnabled"></a>

```go
func DefaultDomainEnabled() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InstancesAllowed`<sup>Required</sup> <a name="InstancesAllowed" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.instancesAllowed"></a>

```go
func InstancesAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchNamespacePublicEndpointParamsRateLimitOutputReference <a name="AiSearchNamespacePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.NewAiSearchNamespacePublicEndpointParamsRateLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchNamespacePublicEndpointParamsRateLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetPeriodMs">ResetPeriodMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetTechnique">ResetTechnique</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriodMs` <a name="ResetPeriodMs" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetPeriodMs"></a>

```go
func ResetPeriodMs()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetRequests"></a>

```go
func ResetRequests()
```

##### `ResetTechnique` <a name="ResetTechnique" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetTechnique"></a>

```go
func ResetTechnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.periodMsInput">PeriodMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.requestsInput">RequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.techniqueInput">TechniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.periodMs">PeriodMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.technique">Technique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodMsInput`<sup>Optional</sup> <a name="PeriodMsInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.periodMsInput"></a>

```go
func PeriodMsInput() *f64
```

- *Type:* *f64

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.requestsInput"></a>

```go
func RequestsInput() *f64
```

- *Type:* *f64

---

##### `TechniqueInput`<sup>Optional</sup> <a name="TechniqueInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.techniqueInput"></a>

```go
func TechniqueInput() *string
```

- *Type:* *string

---

##### `PeriodMs`<sup>Required</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```go
func PeriodMs() *f64
```

- *Type:* *f64

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```go
func Technique() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference <a name="AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/aisearchnamespace"

aisearchnamespace.NewAiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



