
import { Cmp6329Component } from './cmp';
describe('Cmp6329Component', () => {
  it('should add', () => {
    expect(new Cmp6329Component().add6329(1)).toBe(6330);
  });
});