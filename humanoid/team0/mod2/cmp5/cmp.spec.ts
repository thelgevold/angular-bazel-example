
import { Cmp7025Component } from './cmp';
describe('Cmp7025Component', () => {
  it('should add', () => {
    expect(new Cmp7025Component().add7025(1)).toBe(7026);
  });
});