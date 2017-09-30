
import { Cmp7322Component } from './cmp';
describe('Cmp7322Component', () => {
  it('should add', () => {
    expect(new Cmp7322Component().add7322(1)).toBe(7323);
  });
});