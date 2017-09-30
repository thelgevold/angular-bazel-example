
import { Cmp7075Component } from './cmp';
describe('Cmp7075Component', () => {
  it('should add', () => {
    expect(new Cmp7075Component().add7075(1)).toBe(7076);
  });
});