
import { Cmp7403Component } from './cmp';
describe('Cmp7403Component', () => {
  it('should add', () => {
    expect(new Cmp7403Component().add7403(1)).toBe(7404);
  });
});