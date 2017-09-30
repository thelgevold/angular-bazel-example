
import { Cmp6530Component } from './cmp';
describe('Cmp6530Component', () => {
  it('should add', () => {
    expect(new Cmp6530Component().add6530(1)).toBe(6531);
  });
});