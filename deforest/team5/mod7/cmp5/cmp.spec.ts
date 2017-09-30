
import { Cmp3575Component } from './cmp';
describe('Cmp3575Component', () => {
  it('should add', () => {
    expect(new Cmp3575Component().add3575(1)).toBe(3576);
  });
});