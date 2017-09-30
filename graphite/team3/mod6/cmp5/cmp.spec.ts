
import { Cmp6365Component } from './cmp';
describe('Cmp6365Component', () => {
  it('should add', () => {
    expect(new Cmp6365Component().add6365(1)).toBe(6366);
  });
});