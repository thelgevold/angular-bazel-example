
import { Cmp4050Component } from './cmp';
describe('Cmp4050Component', () => {
  it('should add', () => {
    expect(new Cmp4050Component().add4050(1)).toBe(4051);
  });
});