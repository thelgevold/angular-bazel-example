
import { Cmp7508Component } from './cmp';
describe('Cmp7508Component', () => {
  it('should add', () => {
    expect(new Cmp7508Component().add7508(1)).toBe(7509);
  });
});