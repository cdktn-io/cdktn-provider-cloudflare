# `magicTransitCf1Site` Submodule <a name="`magicTransitCf1Site` Submodule" id="@cdktn/provider-cloudflare.magicTransitCf1Site"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitCf1Site <a name="MagicTransitCf1Site" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.NewMagicTransitCf1Site(scope Construct, id *string, config MagicTransitCf1SiteConfig) MagicTransitCf1Site
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig">MagicTransitCf1SiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig">MagicTransitCf1SiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBody` <a name="PutBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody"></a>

```go
func PutBody(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation"></a>

```go
func PutLocation(value MagicTransitCf1SiteLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.MagicTransitCf1Site_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.MagicTransitCf1Site_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.MagicTransitCf1Site_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.MagicTransitCf1Site_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MagicTransitCf1Site to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MagicTransitCf1Site that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MagicTransitCf1Site to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body">Body</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput">BodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput">LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body"></a>

```go
func Body() MagicTransitCf1SiteBodyList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location"></a>

```go
func Location() MagicTransitCf1SiteLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput"></a>

```go
func BodyInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput"></a>

```go
func LocationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitCf1SiteBody <a name="MagicTransitCf1SiteBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

&magictransitcf1site.MagicTransitCf1SiteBody {
	Name: *string,
	Description: *string,
	Location: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name">Name</a></code> | <code>*string</code> | A human-provided name describing the CF1 Site that should be unique within the account. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description">Description</a></code> | <code>*string</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location"></a>

```go
Location MagicTransitCf1SiteBodyLocation
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

### MagicTransitCf1SiteBodyLocation <a name="MagicTransitCf1SiteBodyLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

&magictransitcf1site.MagicTransitCf1SiteBodyLocation {
	Lat: *f64,
	Long: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat">Lat</a></code> | <code>*f64</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long">Long</a></code> | <code>*f64</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name">Name</a></code> | <code>*string</code> | Name of nearest town, city, or village. |

---

##### `Lat`<sup>Optional</sup> <a name="Lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat"></a>

```go
Lat *f64
```

- *Type:* *f64

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `Long`<sup>Optional</sup> <a name="Long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long"></a>

```go
Long *f64
```

- *Type:* *f64

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteConfig <a name="MagicTransitCf1SiteConfig" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

&magictransitcf1site.MagicTransitCf1SiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Body: interface{},
	Description: *string,
	Location: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.magicTransitCf1Site.MagicTransitCf1SiteLocation,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body">Body</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description">Description</a></code> | <code>*string</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name">Name</a></code> | <code>*string</code> | A human-provided name describing the CF1 Site that should be unique within the account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#account_id MagicTransitCf1Site#account_id}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body"></a>

```go
Body interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location"></a>

```go
Location MagicTransitCf1SiteLocation
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteLocation <a name="MagicTransitCf1SiteLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

&magictransitcf1site.MagicTransitCf1SiteLocation {
	Lat: *f64,
	Long: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat">Lat</a></code> | <code>*f64</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long">Long</a></code> | <code>*f64</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name">Name</a></code> | <code>*string</code> | Name of nearest town, city, or village. |

---

##### `Lat`<sup>Optional</sup> <a name="Lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat"></a>

```go
Lat *f64
```

- *Type:* *f64

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `Long`<sup>Optional</sup> <a name="Long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long"></a>

```go
Long *f64
```

- *Type:* *f64

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitCf1SiteBodyList <a name="MagicTransitCf1SiteBodyList" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.NewMagicTransitCf1SiteBodyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MagicTransitCf1SiteBodyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get"></a>

```go
func Get(index *f64) MagicTransitCf1SiteBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitCf1SiteBodyLocationOutputReference <a name="MagicTransitCf1SiteBodyLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.NewMagicTransitCf1SiteBodyLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitCf1SiteBodyLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat">ResetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong">ResetLong</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLat` <a name="ResetLat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat"></a>

```go
func ResetLat()
```

##### `ResetLong` <a name="ResetLong" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong"></a>

```go
func ResetLong()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput">LatInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput">LongInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat">Lat</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long">Long</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatInput`<sup>Optional</sup> <a name="LatInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput"></a>

```go
func LatInput() *f64
```

- *Type:* *f64

---

##### `LongInput`<sup>Optional</sup> <a name="LongInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput"></a>

```go
func LongInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Lat`<sup>Required</sup> <a name="Lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat"></a>

```go
func Lat() *f64
```

- *Type:* *f64

---

##### `Long`<sup>Required</sup> <a name="Long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long"></a>

```go
func Long() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitCf1SiteBodyOutputReference <a name="MagicTransitCf1SiteBodyOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.NewMagicTransitCf1SiteBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MagicTransitCf1SiteBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation"></a>

```go
func PutLocation(value MagicTransitCf1SiteBodyLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation"></a>

```go
func ResetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput">LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location"></a>

```go
func Location() MagicTransitCf1SiteBodyLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput"></a>

```go
func LocationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitCf1SiteLocationOutputReference <a name="MagicTransitCf1SiteLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/magictransitcf1site"

magictransitcf1site.NewMagicTransitCf1SiteLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitCf1SiteLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat">ResetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong">ResetLong</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLat` <a name="ResetLat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat"></a>

```go
func ResetLat()
```

##### `ResetLong` <a name="ResetLong" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong"></a>

```go
func ResetLong()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput">LatInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput">LongInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat">Lat</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long">Long</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatInput`<sup>Optional</sup> <a name="LatInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput"></a>

```go
func LatInput() *f64
```

- *Type:* *f64

---

##### `LongInput`<sup>Optional</sup> <a name="LongInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput"></a>

```go
func LongInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Lat`<sup>Required</sup> <a name="Lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat"></a>

```go
func Lat() *f64
```

- *Type:* *f64

---

##### `Long`<sup>Required</sup> <a name="Long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long"></a>

```go
func Long() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



