
import { Cmp5103Component } from './cmp';
describe('Cmp5103Component', () => {
  it('should add', () => {
    expect(new Cmp5103Component().add5103(1)).toBe(5104);
  });
});