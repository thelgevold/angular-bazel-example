
import { Cmp4365Component } from './cmp';
describe('Cmp4365Component', () => {
  it('should add', () => {
    expect(new Cmp4365Component().add4365(1)).toBe(4366);
  });
});