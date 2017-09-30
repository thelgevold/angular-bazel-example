
import { Cmp7812Component } from './cmp';
describe('Cmp7812Component', () => {
  it('should add', () => {
    expect(new Cmp7812Component().add7812(1)).toBe(7813);
  });
});