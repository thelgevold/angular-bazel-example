
import { Cmp2601Component } from './cmp';
describe('Cmp2601Component', () => {
  it('should add', () => {
    expect(new Cmp2601Component().add2601(1)).toBe(2602);
  });
});