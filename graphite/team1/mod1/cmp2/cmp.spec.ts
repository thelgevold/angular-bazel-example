
import { Cmp6112Component } from './cmp';
describe('Cmp6112Component', () => {
  it('should add', () => {
    expect(new Cmp6112Component().add6112(1)).toBe(6113);
  });
});