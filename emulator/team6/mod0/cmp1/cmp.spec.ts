
import { Cmp4601Component } from './cmp';
describe('Cmp4601Component', () => {
  it('should add', () => {
    expect(new Cmp4601Component().add4601(1)).toBe(4602);
  });
});