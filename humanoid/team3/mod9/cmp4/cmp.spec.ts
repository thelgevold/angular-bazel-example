
import { Cmp7394Component } from './cmp';
describe('Cmp7394Component', () => {
  it('should add', () => {
    expect(new Cmp7394Component().add7394(1)).toBe(7395);
  });
});