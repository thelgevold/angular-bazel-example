
import { Cmp7587Component } from './cmp';
describe('Cmp7587Component', () => {
  it('should add', () => {
    expect(new Cmp7587Component().add7587(1)).toBe(7588);
  });
});