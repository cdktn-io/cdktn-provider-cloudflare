# `emailSecurityDomain` Submodule <a name="`emailSecurityDomain` Submodule" id="@cdktn/provider-cloudflare.emailSecurityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityDomain <a name="EmailSecurityDomain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain cloudflare_email_security_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

emailsecuritydomain.NewEmailSecurityDomain(scope Construct, id *string, config EmailSecurityDomainConfig) EmailSecurityDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig">EmailSecurityDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig">EmailSecurityDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetLookbackHops">ResetLookbackHops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsInbound">ResetRequireTlsInbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsOutbound">ResetRequireTlsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetTransport">ResetTransport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetFolder` <a name="ResetFolder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetIntegrationId"></a>

```go
func ResetIntegrationId()
```

##### `ResetLookbackHops` <a name="ResetLookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetLookbackHops"></a>

```go
func ResetLookbackHops()
```

##### `ResetRequireTlsInbound` <a name="ResetRequireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsInbound"></a>

```go
func ResetRequireTlsInbound()
```

##### `ResetRequireTlsOutbound` <a name="ResetRequireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsOutbound"></a>

```go
func ResetRequireTlsOutbound()
```

##### `ResetTransport` <a name="ResetTransport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetTransport"></a>

```go
func ResetTransport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

emailsecuritydomain.EmailSecurityDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

emailsecuritydomain.EmailSecurityDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

emailsecuritydomain.EmailSecurityDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

emailsecuritydomain.EmailSecurityDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EmailSecurityDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailSecurityDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailSecurityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference">EmailSecurityDomainAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dmarcStatus">DmarcStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.emailsProcessed">EmailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference">EmailSecurityDomainEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.inboxProvider">InboxProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.o365TenantId">O365TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.spfStatus">SpfStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModesInput">AllowedDeliveryModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositionsInput">DropDispositionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictionsInput">IpRestrictionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHopsInput">LookbackHopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInboundInput">RequireTlsInboundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutboundInput">RequireTlsOutboundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transportInput">TransportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModes">AllowedDeliveryModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositions">DropDispositions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictions">IpRestrictions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHops">LookbackHops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInbound">RequireTlsInbound</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutbound">RequireTlsOutbound</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transport">Transport</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.authorization"></a>

```go
func Authorization() EmailSecurityDomainAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference">EmailSecurityDomainAuthorizationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DmarcStatus`<sup>Required</sup> <a name="DmarcStatus" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dmarcStatus"></a>

```go
func DmarcStatus() *string
```

- *Type:* *string

---

##### `EmailsProcessed`<sup>Required</sup> <a name="EmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.emailsProcessed"></a>

```go
func EmailsProcessed() EmailSecurityDomainEmailsProcessedOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference">EmailSecurityDomainEmailsProcessedOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InboxProvider`<sup>Required</sup> <a name="InboxProvider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.inboxProvider"></a>

```go
func InboxProvider() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `O365TenantId`<sup>Required</sup> <a name="O365TenantId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.o365TenantId"></a>

```go
func O365TenantId() *string
```

- *Type:* *string

---

##### `SpfStatus`<sup>Required</sup> <a name="SpfStatus" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.spfStatus"></a>

```go
func SpfStatus() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowedDeliveryModesInput`<sup>Optional</sup> <a name="AllowedDeliveryModesInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModesInput"></a>

```go
func AllowedDeliveryModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `DropDispositionsInput`<sup>Optional</sup> <a name="DropDispositionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositionsInput"></a>

```go
func DropDispositionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `IpRestrictionsInput`<sup>Optional</sup> <a name="IpRestrictionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictionsInput"></a>

```go
func IpRestrictionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LookbackHopsInput`<sup>Optional</sup> <a name="LookbackHopsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHopsInput"></a>

```go
func LookbackHopsInput() *f64
```

- *Type:* *f64

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequireTlsInboundInput`<sup>Optional</sup> <a name="RequireTlsInboundInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInboundInput"></a>

```go
func RequireTlsInboundInput() interface{}
```

- *Type:* interface{}

---

##### `RequireTlsOutboundInput`<sup>Optional</sup> <a name="RequireTlsOutboundInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutboundInput"></a>

```go
func RequireTlsOutboundInput() interface{}
```

- *Type:* interface{}

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transportInput"></a>

```go
func TransportInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowedDeliveryModes`<sup>Required</sup> <a name="AllowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModes"></a>

```go
func AllowedDeliveryModes() *[]*string
```

- *Type:* *[]*string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DropDispositions`<sup>Required</sup> <a name="DropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositions"></a>

```go
func DropDispositions() *[]*string
```

- *Type:* *[]*string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `IpRestrictions`<sup>Required</sup> <a name="IpRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictions"></a>

```go
func IpRestrictions() *[]*string
```

- *Type:* *[]*string

---

##### `LookbackHops`<sup>Required</sup> <a name="LookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHops"></a>

```go
func LookbackHops() *f64
```

- *Type:* *f64

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RequireTlsInbound`<sup>Required</sup> <a name="RequireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInbound"></a>

```go
func RequireTlsInbound() interface{}
```

- *Type:* interface{}

---

##### `RequireTlsOutbound`<sup>Required</sup> <a name="RequireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutbound"></a>

```go
func RequireTlsOutbound() interface{}
```

- *Type:* interface{}

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transport"></a>

```go
func Transport() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityDomainAuthorization <a name="EmailSecurityDomainAuthorization" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

&emailsecuritydomain.EmailSecurityDomainAuthorization {

}
```


### EmailSecurityDomainConfig <a name="EmailSecurityDomainConfig" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

&emailsecuritydomain.EmailSecurityDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AllowedDeliveryModes: *[]*string,
	Domain: *string,
	DropDispositions: *[]*string,
	IpRestrictions: *[]*string,
	Regions: *[]*string,
	Folder: *string,
	IntegrationId: *string,
	LookbackHops: *f64,
	RequireTlsInbound: interface{},
	RequireTlsOutbound: interface{},
	Transport: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.allowedDeliveryModes">AllowedDeliveryModes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dropDispositions">DropDispositions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.ipRestrictions">IpRestrictions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.folder">Folder</a></code> | <code>*string</code> | Available values: "AllItems", "Inbox". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lookbackHops">LookbackHops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsInbound">RequireTlsInbound</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsOutbound">RequireTlsOutbound</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.transport">Transport</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#account_id EmailSecurityDomain#account_id}

---

##### `AllowedDeliveryModes`<sup>Required</sup> <a name="AllowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.allowedDeliveryModes"></a>

```go
AllowedDeliveryModes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}.

---

##### `DropDispositions`<sup>Required</sup> <a name="DropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dropDispositions"></a>

```go
DropDispositions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}.

---

##### `IpRestrictions`<sup>Required</sup> <a name="IpRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.ipRestrictions"></a>

```go
IpRestrictions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}.

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

Available values: "AllItems", "Inbox".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#folder EmailSecurityDomain#folder}

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}.

---

##### `LookbackHops`<sup>Optional</sup> <a name="LookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lookbackHops"></a>

```go
LookbackHops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}.

---

##### `RequireTlsInbound`<sup>Optional</sup> <a name="RequireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsInbound"></a>

```go
RequireTlsInbound interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}.

---

##### `RequireTlsOutbound`<sup>Optional</sup> <a name="RequireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsOutbound"></a>

```go
RequireTlsOutbound interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}.

---

##### `Transport`<sup>Optional</sup> <a name="Transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.transport"></a>

```go
Transport *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}.

---

### EmailSecurityDomainEmailsProcessed <a name="EmailSecurityDomainEmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

&emailsecuritydomain.EmailSecurityDomainEmailsProcessed {

}
```


## Classes <a name="Classes" id="Classes"></a>

### EmailSecurityDomainAuthorizationOutputReference <a name="EmailSecurityDomainAuthorizationOutputReference" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

emailsecuritydomain.NewEmailSecurityDomainAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmailSecurityDomainAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.authorized">Authorized</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization">EmailSecurityDomainAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorized`<sup>Required</sup> <a name="Authorized" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.authorized"></a>

```go
func Authorized() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmailSecurityDomainAuthorization
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization">EmailSecurityDomainAuthorization</a>

---


### EmailSecurityDomainEmailsProcessedOutputReference <a name="EmailSecurityDomainEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecuritydomain"

emailsecuritydomain.NewEmailSecurityDomainEmailsProcessedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmailSecurityDomainEmailsProcessedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed">TotalEmailsProcessed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">TotalEmailsProcessedPrevious</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed">EmailSecurityDomainEmailsProcessed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `TotalEmailsProcessed`<sup>Required</sup> <a name="TotalEmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```go
func TotalEmailsProcessed() *f64
```

- *Type:* *f64

---

##### `TotalEmailsProcessedPrevious`<sup>Required</sup> <a name="TotalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```go
func TotalEmailsProcessedPrevious() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.internalValue"></a>

```go
func InternalValue() EmailSecurityDomainEmailsProcessed
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed">EmailSecurityDomainEmailsProcessed</a>

---



