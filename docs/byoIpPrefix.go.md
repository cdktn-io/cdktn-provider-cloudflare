# `byoIpPrefix` Submodule <a name="`byoIpPrefix` Submodule" id="@cdktn/provider-cloudflare.byoIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ByoIpPrefix <a name="ByoIpPrefix" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/byoipprefix"

byoipprefix.NewByoIpPrefix(scope Construct, id *string, config ByoIpPrefixConfig) ByoIpPrefix
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig">ByoIpPrefixConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig">ByoIpPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetDelegateLoaCreation">ResetDelegateLoaCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetLoaDocumentId">ResetLoaDocumentId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDelegateLoaCreation` <a name="ResetDelegateLoaCreation" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetDelegateLoaCreation"></a>

```go
func ResetDelegateLoaCreation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLoaDocumentId` <a name="ResetLoaDocumentId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetLoaDocumentId"></a>

```go
func ResetLoaDocumentId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ByoIpPrefix resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/byoipprefix"

byoipprefix.ByoIpPrefix_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/byoipprefix"

byoipprefix.ByoIpPrefix_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/byoipprefix"

byoipprefix.ByoIpPrefix_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/byoipprefix"

byoipprefix.ByoIpPrefix_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ByoIpPrefix resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ByoIpPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ByoIpPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ByoIpPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.advertised">Advertised</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.advertisedModifiedAt">AdvertisedModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.approved">Approved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.irrValidationState">IrrValidationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.onDemandEnabled">OnDemandEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.onDemandLocked">OnDemandLocked</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.ownershipValidationState">OwnershipValidationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.ownershipValidationToken">OwnershipValidationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.rpkiValidationState">RpkiValidationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.asnInput">AsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.delegateLoaCreationInput">DelegateLoaCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.loaDocumentIdInput">LoaDocumentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.delegateLoaCreation">DelegateLoaCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.loaDocumentId">LoaDocumentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Advertised`<sup>Required</sup> <a name="Advertised" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.advertised"></a>

```go
func Advertised() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AdvertisedModifiedAt`<sup>Required</sup> <a name="AdvertisedModifiedAt" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.advertisedModifiedAt"></a>

```go
func AdvertisedModifiedAt() *string
```

- *Type:* *string

---

##### `Approved`<sup>Required</sup> <a name="Approved" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.approved"></a>

```go
func Approved() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IrrValidationState`<sup>Required</sup> <a name="IrrValidationState" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.irrValidationState"></a>

```go
func IrrValidationState() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `OnDemandEnabled`<sup>Required</sup> <a name="OnDemandEnabled" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.onDemandEnabled"></a>

```go
func OnDemandEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OnDemandLocked`<sup>Required</sup> <a name="OnDemandLocked" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.onDemandLocked"></a>

```go
func OnDemandLocked() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OwnershipValidationState`<sup>Required</sup> <a name="OwnershipValidationState" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.ownershipValidationState"></a>

```go
func OwnershipValidationState() *string
```

- *Type:* *string

---

##### `OwnershipValidationToken`<sup>Required</sup> <a name="OwnershipValidationToken" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.ownershipValidationToken"></a>

```go
func OwnershipValidationToken() *string
```

- *Type:* *string

---

##### `RpkiValidationState`<sup>Required</sup> <a name="RpkiValidationState" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.rpkiValidationState"></a>

```go
func RpkiValidationState() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.asnInput"></a>

```go
func AsnInput() *f64
```

- *Type:* *f64

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `DelegateLoaCreationInput`<sup>Optional</sup> <a name="DelegateLoaCreationInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.delegateLoaCreationInput"></a>

```go
func DelegateLoaCreationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LoaDocumentIdInput`<sup>Optional</sup> <a name="LoaDocumentIdInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.loaDocumentIdInput"></a>

```go
func LoaDocumentIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `DelegateLoaCreation`<sup>Required</sup> <a name="DelegateLoaCreation" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.delegateLoaCreation"></a>

```go
func DelegateLoaCreation() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LoaDocumentId`<sup>Required</sup> <a name="LoaDocumentId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.loaDocumentId"></a>

```go
func LoaDocumentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ByoIpPrefixConfig <a name="ByoIpPrefixConfig" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/byoipprefix"

&byoipprefix.ByoIpPrefixConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Asn: *f64,
	Cidr: *string,
	DelegateLoaCreation: interface{},
	Description: *string,
	LoaDocumentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.asn">Asn</a></code> | <code>*f64</code> | Autonomous System Number (ASN) the prefix will be advertised under. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.cidr">Cidr</a></code> | <code>*string</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.delegateLoaCreation">DelegateLoaCreation</a></code> | <code>interface{}</code> | Whether Cloudflare is allowed to generate the LOA document on behalf of the prefix owner. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.description">Description</a></code> | <code>*string</code> | Description of the prefix. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.loaDocumentId">LoaDocumentId</a></code> | <code>*string</code> | Identifier for the uploaded LOA document. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/byo_ip_prefix#account_id ByoIpPrefix#account_id}

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.asn"></a>

```go
Asn *f64
```

- *Type:* *f64

Autonomous System Number (ASN) the prefix will be advertised under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/byo_ip_prefix#asn ByoIpPrefix#asn}

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/byo_ip_prefix#cidr ByoIpPrefix#cidr}

---

##### `DelegateLoaCreation`<sup>Optional</sup> <a name="DelegateLoaCreation" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.delegateLoaCreation"></a>

```go
DelegateLoaCreation interface{}
```

- *Type:* interface{}

Whether Cloudflare is allowed to generate the LOA document on behalf of the prefix owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/byo_ip_prefix#delegate_loa_creation ByoIpPrefix#delegate_loa_creation}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/byo_ip_prefix#description ByoIpPrefix#description}

---

##### `LoaDocumentId`<sup>Optional</sup> <a name="LoaDocumentId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.loaDocumentId"></a>

```go
LoaDocumentId *string
```

- *Type:* *string

Identifier for the uploaded LOA document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/byo_ip_prefix#loa_document_id ByoIpPrefix#loa_document_id}

---



