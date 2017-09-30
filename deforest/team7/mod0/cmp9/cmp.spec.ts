
import { Cmp3709Component } from './cmp';
describe('Cmp3709Component', () => {
  it('should add', () => {
    expect(new Cmp3709Component().add3709(1)).toBe(3710);
  });
});