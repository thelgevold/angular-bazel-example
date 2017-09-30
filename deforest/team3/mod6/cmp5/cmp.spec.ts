
import { Cmp3365Component } from './cmp';
describe('Cmp3365Component', () => {
  it('should add', () => {
    expect(new Cmp3365Component().add3365(1)).toBe(3366);
  });
});