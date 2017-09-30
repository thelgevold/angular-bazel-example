
import { Cmp7154Component } from './cmp';
describe('Cmp7154Component', () => {
  it('should add', () => {
    expect(new Cmp7154Component().add7154(1)).toBe(7155);
  });
});