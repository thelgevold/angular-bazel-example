
import { Cmp7902Component } from './cmp';
describe('Cmp7902Component', () => {
  it('should add', () => {
    expect(new Cmp7902Component().add7902(1)).toBe(7903);
  });
});