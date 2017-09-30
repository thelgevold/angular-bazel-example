
import { Cmp7218Component } from './cmp';
describe('Cmp7218Component', () => {
  it('should add', () => {
    expect(new Cmp7218Component().add7218(1)).toBe(7219);
  });
});