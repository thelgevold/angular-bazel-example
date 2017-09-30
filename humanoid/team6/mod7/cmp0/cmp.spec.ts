
import { Cmp7670Component } from './cmp';
describe('Cmp7670Component', () => {
  it('should add', () => {
    expect(new Cmp7670Component().add7670(1)).toBe(7671);
  });
});