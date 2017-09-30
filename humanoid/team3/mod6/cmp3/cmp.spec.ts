
import { Cmp7363Component } from './cmp';
describe('Cmp7363Component', () => {
  it('should add', () => {
    expect(new Cmp7363Component().add7363(1)).toBe(7364);
  });
});