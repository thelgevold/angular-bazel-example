
import { Cmp7685Component } from './cmp';
describe('Cmp7685Component', () => {
  it('should add', () => {
    expect(new Cmp7685Component().add7685(1)).toBe(7686);
  });
});