
import { Cmp6589Component } from './cmp';
describe('Cmp6589Component', () => {
  it('should add', () => {
    expect(new Cmp6589Component().add6589(1)).toBe(6590);
  });
});