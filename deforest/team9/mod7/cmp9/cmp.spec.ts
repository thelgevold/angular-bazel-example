
import { Cmp3979Component } from './cmp';
describe('Cmp3979Component', () => {
  it('should add', () => {
    expect(new Cmp3979Component().add3979(1)).toBe(3980);
  });
});