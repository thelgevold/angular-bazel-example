
import { Cmp7050Component } from './cmp';
describe('Cmp7050Component', () => {
  it('should add', () => {
    expect(new Cmp7050Component().add7050(1)).toBe(7051);
  });
});