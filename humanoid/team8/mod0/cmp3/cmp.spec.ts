
import { Cmp7803Component } from './cmp';
describe('Cmp7803Component', () => {
  it('should add', () => {
    expect(new Cmp7803Component().add7803(1)).toBe(7804);
  });
});